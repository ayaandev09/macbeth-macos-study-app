"use client";

export interface SyncPayload {
  activeChapterId?: string;
  viewMode?: string;
  studyGoal?: "learn" | "revise";
  academicStyle?: string;
  speedReadMode?: boolean;
  completedChapters?: Record<string, boolean>;
  completedSubSections?: Record<string, boolean>;
  bookmarkedQuotes?: Record<string, boolean>;
  timestamp?: number;
}

export interface SyncEnvelope {
  success: boolean;
  version: number;
  timestamp: number;
  clientId: string;
  payload: SyncPayload;
}

const CLIENT_ID =
  typeof window !== "undefined"
    ? `client-${Math.random().toString(36).substring(2, 9)}`
    : "ssr";

export const PUBLIC_TUNNEL_URL = "https://rats-gtk-luke-rachel.trycloudflare.com";
export const LOCAL_LAN_URL = "http://192.168.178.83:3081";

export function getSyncBaseUrl(): string {
  if (typeof window === "undefined") return "";
  if (
    window.location.protocol === "app:" ||
    window.location.hostname === "study-dashboard" ||
    window.location.protocol === "file:"
  ) {
    return "http://127.0.0.1:3081";
  }
  return "";
}

let lastSyncTimestamp = 0;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let eventSource: EventSource | null = null;

export function encodeSyncToUrl(payload: SyncPayload): string {
  try {
    const compact = {
      a: payload.activeChapterId,
      g: payload.studyGoal,
      f: payload.academicStyle,
      s: payload.speedReadMode ? 1 : 0,
      c: Object.keys(payload.completedChapters || {}).filter(
        (k) => payload.completedChapters?.[k]
      ),
      t: Date.now(),
    };
    const json = JSON.stringify(compact);
    if (typeof window !== "undefined") {
      return encodeURIComponent(window.btoa(unescape(encodeURIComponent(json))));
    }
    return "";
  } catch (err) {
    console.error("Failed to encode sync payload:", err);
    return "";
  }
}

export function decodeSyncFromUrl(encoded: string): SyncPayload | null {
  try {
    const decodedStr = decodeURIComponent(escape(atob(decodeURIComponent(encoded))));
    const parsed = JSON.parse(decodedStr);

    const completedChapters: Record<string, boolean> = {};
    if (Array.isArray(parsed.c)) {
      parsed.c.forEach((k: string) => {
        completedChapters[k] = true;
      });
    }

    return {
      activeChapterId: parsed.a || "act1-scene1",
      studyGoal: parsed.g === "learn" ? "learn" : "revise",
      academicStyle: parsed.f || "newsreader",
      speedReadMode: parsed.s === 1,
      completedChapters,
    };
  } catch (err) {
    console.error("Failed to decode URL sync payload:", err);
    return null;
  }
}

export function pushSyncToServer(payload: SyncPayload, immediate: boolean = false) {
  if (typeof window === "undefined") return;

  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }

  const performPost = async () => {
    try {
      const now = Date.now();
      lastSyncTimestamp = now;
      await fetch(`${getSyncBaseUrl()}/api/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          version: 1,
          timestamp: now,
          clientId: CLIENT_ID,
          payload,
        }),
      });
    } catch {
      // Offline fallback
    }
  };

  if (immediate) {
    performPost();
  } else {
    debounceTimer = setTimeout(performPost, 350);
  }
}

export async function pullSyncFromServer(): Promise<SyncPayload | null> {
  if (typeof window === "undefined") return null;
  try {
    const res = await fetch(`${getSyncBaseUrl()}/api/sync`, { cache: "no-store" });
    if (!res.ok) return null;
    const data: SyncEnvelope = await res.json();
    if (data.success && data.payload) {
      if (data.timestamp > lastSyncTimestamp) {
        lastSyncTimestamp = data.timestamp;
      }
      return data.payload;
    }
  } catch {
    // Offline fallback
  }
  return null;
}

export function initLiveSyncConnection(
  onRemoteUpdate: (payload: SyncPayload) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  let pollInterval: ReturnType<typeof setInterval> | null = null;

  const handleIncomingData = (dataText: string) => {
    try {
      const data: SyncEnvelope = JSON.parse(dataText);
      if (data && data.payload && data.clientId !== CLIENT_ID) {
        if (data.timestamp > lastSyncTimestamp) {
          lastSyncTimestamp = data.timestamp;
          onRemoteUpdate(data.payload);
        }
      }
    } catch (err) {
      console.error("Error parsing sync event:", err);
    }
  };

  try {
    if (typeof EventSource !== "undefined") {
      eventSource = new EventSource(`${getSyncBaseUrl()}/api/sync/events`);
      eventSource.onmessage = (event) => {
        handleIncomingData(event.data);
      };
      eventSource.onerror = () => {
        if (!pollInterval) {
          pollInterval = setInterval(async () => {
            const remote = await pullSyncFromServer();
            if (remote) {
              onRemoteUpdate(remote);
            }
          }, 3500);
        }
      };
    }
  } catch {
    // blocked or unavailable
  }

  if (!pollInterval) {
    pollInterval = setInterval(async () => {
      const remote = await pullSyncFromServer();
      if (remote) {
        onRemoteUpdate(remote);
      }
    }, 4000);
  }

  return () => {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
  };
}
