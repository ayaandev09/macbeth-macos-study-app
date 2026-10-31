"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ALL_CHAPTERS, BOOK_PARTS, ThemeId, ActId } from "@/data";

export type ViewMode = "focus" | "stream" | "matrix" | "lexicon";

interface StudyStoreState {
  // Navigation & View State
  activeChapterId: string;
  activePartFilter: "all" | ActId;
  activeThemeFilter: ThemeId | "all";
  viewMode: ViewMode;
  speedReadMode: boolean;
  searchQuery: string;
  sidebarCollapsed: boolean;
  chapterSheetOpen: boolean;

  // Persisted Study Progress State
  completedChapters: Record<string, boolean>;
  completedSubSections: Record<string, boolean>;
  bookmarkedQuotes: Record<string, boolean>;
  chapterNotes: Record<string, string>;

  // Actions
  setActiveChapter: (chapterId: string) => void;
  setActivePartFilter: (partId: "all" | ActId) => void;
  setActiveThemeFilter: (themeId: ThemeId | "all") => void;
  setViewMode: (mode: ViewMode) => void;
  toggleSpeedReadMode: () => void;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
  setChapterSheetOpen: (open: boolean) => void;

  // Progress Tracker Actions
  toggleChapterComplete: (chapterId: string) => void;
  toggleSubSectionComplete: (chapterId: string, subSectionId: string) => void;
  togglePartComplete: (partId: ActId) => void;
  toggleBookmarkQuote: (quoteId: string) => void;
  setChapterNote: (chapterId: string, note: string) => void;
  resetAllProgress: () => void;
  goToNextChapter: () => void;
  goToPrevChapter: () => void;
}

export const useStudyStore = create<StudyStoreState>()(
  persist(
    (set, get) => ({
      activeChapterId: "a1-s1",
      activePartFilter: "all",
      activeThemeFilter: "all",
      viewMode: "focus",
      speedReadMode: false,
      searchQuery: "",
      sidebarCollapsed: false,
      chapterSheetOpen: false,

      completedChapters: {},
      completedSubSections: {},
      bookmarkedQuotes: {},
      chapterNotes: {},

      setActiveChapter: (chapterId) =>
        set({
          activeChapterId: chapterId,
        }),

      setActivePartFilter: (partId) =>
        set({
          activePartFilter: partId,
        }),

      setActiveThemeFilter: (themeId) =>
        set({
          activeThemeFilter: themeId,
        }),

      setViewMode: (mode) =>
        set({
          viewMode: mode,
        }),

      toggleSpeedReadMode: () =>
        set((state) => ({
          speedReadMode: !state.speedReadMode,
        })),

      setSearchQuery: (query) =>
        set({
          searchQuery: query,
        }),

      toggleSidebar: () =>
        set((state) => ({
          sidebarCollapsed: !state.sidebarCollapsed,
        })),

      setChapterSheetOpen: (open) =>
        set({
          chapterSheetOpen: open,
        }),

      toggleChapterComplete: (chapterId) =>
        set((state) => {
          const isCurrentlyCompleted = !!state.completedChapters[chapterId];
          const nextCompleted = !isCurrentlyCompleted;
          const chapter = ALL_CHAPTERS.find((c) => c.id === chapterId);

          const updatedSubSections = { ...state.completedSubSections };
          if (chapter) {
            chapter.subSections.forEach((sub) => {
              updatedSubSections[sub.id] = nextCompleted;
            });
          }

          return {
            completedChapters: {
              ...state.completedChapters,
              [chapterId]: nextCompleted,
            },
            completedSubSections: updatedSubSections,
          };
        }),

      toggleSubSectionComplete: (chapterId, subSectionId) =>
        set((state) => {
          const nextSubState = !state.completedSubSections[subSectionId];
          const updatedSubSections = {
            ...state.completedSubSections,
            [subSectionId]: nextSubState,
          };

          const chapter = ALL_CHAPTERS.find((c) => c.id === chapterId);
          let allSubsDone = false;
          if (chapter && chapter.subSections.length > 0) {
            allSubsDone = chapter.subSections.every(
              (sub) => !!updatedSubSections[sub.id]
            );
          }

          return {
            completedSubSections: updatedSubSections,
            completedChapters: {
              ...state.completedChapters,
              [chapterId]: allSubsDone,
            },
          };
        }),

      togglePartComplete: (partId) =>
        set((state) => {
          const part = BOOK_PARTS.find((p) => p.id === partId);
          if (!part) return state;

          const allPartDone = part.chapters.every(
            (ch) => !!state.completedChapters[ch.id]
          );
          const targetState = !allPartDone;

          const updatedChapters = { ...state.completedChapters };
          const updatedSubSections = { ...state.completedSubSections };

          part.chapters.forEach((ch) => {
            updatedChapters[ch.id] = targetState;
            ch.subSections.forEach((sub) => {
              updatedSubSections[sub.id] = targetState;
            });
          });

          return {
            completedChapters: updatedChapters,
            completedSubSections: updatedSubSections,
          };
        }),

      toggleBookmarkQuote: (quoteId) =>
        set((state) => ({
          bookmarkedQuotes: {
            ...state.bookmarkedQuotes,
            [quoteId]: !state.bookmarkedQuotes[quoteId],
          },
        })),

      setChapterNote: (chapterId, note) =>
        set((state) => ({
          chapterNotes: {
            ...state.chapterNotes,
            [chapterId]: note,
          },
        })),

      resetAllProgress: () =>
        set({
          completedChapters: {},
          completedSubSections: {},
          bookmarkedQuotes: {},
        }),

      goToNextChapter: () => {
        const { activeChapterId } = get();
        const idx = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
        if (idx >= 0 && idx < ALL_CHAPTERS.length - 1) {
          set({ activeChapterId: ALL_CHAPTERS[idx + 1].id });
        }
      },

      goToPrevChapter: () => {
        const { activeChapterId } = get();
        const idx = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
        if (idx > 0) {
          set({ activeChapterId: ALL_CHAPTERS[idx - 1].id });
        }
      },
    }),
    {
      name: "shakespeare-macbeth-liquid-study-store-v1",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            }
      ),
      partialize: (state) => ({
        completedChapters: state.completedChapters,
        completedSubSections: state.completedSubSections,
        bookmarkedQuotes: state.bookmarkedQuotes,
        chapterNotes: state.chapterNotes,
        activeChapterId: state.activeChapterId,
        speedReadMode: state.speedReadMode,
      }),
    }
  )
);
