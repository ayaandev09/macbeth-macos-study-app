# 👑 Macbeth Codex // 1606
### The IB Literature Study Dashboard for macOS & Windows

**Macbeth Codex** is a native cross-platform application built for International Baccalaureate (IB) Diploma Literature students and Shakespearean scholars. It combines comprehensive First Folio textual analysis with a dark Liquid Glass bento interface, active revision tools, a dedicated Academic Handwritten Notes Studio, and native desktop widgets across both **macOS** (`.app` / `.dmg`) and **Windows** (`.exe` standalone via Tauri v2).

---

## 📸 Interface Preview & Navigation

### 1. The Command Center (Hero Overview)
<img width="1441" height="928" alt="Hero Overview" src="https://github.com/user-attachments/assets/f8991c11-7459-40b1-b695-1d0de604effb" />

The primary launchpad provides a high-level view of your syllabus progress and current study target:
* **Folio Mastery Tracker**: Tracks completion across all 31 scenes and 78 narrative beats in real time, calculating estimated remaining study hours.
* **Act & Scene Sidebar**: Jump straight into any scene from Act I through Act V, with visual badges marking completed scenes.
* **Act Summary Card**: Breaks down dramatic stakes, First Folio historical context, and core thematic conflicts prior to close reading.
* **Global Search**: Press `⌘K` (macOS) or `Ctrl+K` (Windows) to search across all scenes for specific soliloquies, quotes, and characters.

---

### 2. Analytical Hub & Theme Matrix
<img width="1441" height="928" alt="Analytical Hub" src="https://github.com/user-attachments/assets/b1125652-d1d1-4490-90cf-eaafd307b683" />

Designed specifically for IB Paper 1, Paper 2, and Individual Oral (IO) preparation:
* **Motif Filter Tags**: Filter textual analysis instantly across five core themes: Ambition, Fate vs. Free Will, Manhood & Gender, Appearance vs. Reality, and Supernatural Equivocation.
* **Shakespearean Anchors**: High-scoring quotes paired with structural analysis, historical subtext, and literary device breakdowns.
* **Character Arcs**: Contrast dramatic shifts side-by-side, such as Macbeth's moral collapse alongside Lady Macbeth's guilt.

---

### 3. Active Revision & Continuous Flow
<img width="1441" height="928" alt="Active Revision Mode" src="https://github.com/user-attachments/assets/f757daca-0385-4a62-9bd3-a43c52bced03" />

* **Continuous Flow Mode**: Read uninterrupted scene analyses and critical commentaries in a clean, vertical stream without page reloads.
<img width="1442" height="922" alt="Continuous Flow" src="https://github.com/user-attachments/assets/79e2e947-a5a3-492d-960a-267e78550843" />

* **Active Recall Cards**: Test memory using interactive flashcards, quote fill-in-the-blanks, and thematic justification prompts.
* Switch between modes at any time using the Study and Revision toggle in the top bar.

---

### 4. ✍️ Academic Handwritten Notes Studio
A distraction-free, analog-feel digital notebook seamlessly embedded inside the analytical inspector and scene cards:
* **Ruled Notebook Texture**: Authentic 28px repeating guide lines engineered specifically for essay synthesis and close analysis notes.
* **Curated Academic Handwriting Typography**: Precision-styled cursive font stack featuring *Caveat*, *Kalam*, *Noteworthy*, and *Snell Roundhand*.
* **Live Telemetry Console**: Real-time counter tracking words, characters, and reading duration.
* **Action Shortcuts**: Quick bullet insertion (`• Bullet`), quotation framing (`"Quote"`), one-click clipboard copying, and canvas reset.
* **100% Offline Persistence**: Automatically persists draft arguments and notes on-device via `localStorage`.

---

### 5. Desktop Widgets (macOS WidgetKit)
<img width="430" height="817" alt="Native Desktop Integration (WidgetKit)" src="https://github.com/user-attachments/assets/4ebb3351-edfa-4c9a-8a2e-bf33f97484ab" />

Keep revision top-of-mind without keeping the full app open:
* **Live Study Counter**: Displays your active revision streak, remaining scenes, and next scheduled scene on your desktop wallpaper or Notification Center.
* **One-Click Launch**: Clicking the widget opens the app directly to your next unread scene.
* **Local Sync**: Progress synchronizes instantly across macOS without requiring an account login or network connection.

---

## ⌨️ Keyboard Shortcuts

* `⌘ + K` / `Ctrl + K`: Open quick search for scenes, motifs, and quotes
* `Space`: Flip flashcards in Active Recall mode
* `←` / `→`: Jump to the previous or next scene
* `⌘ + 1` / `Ctrl + 1`: Switch to Continuous Flow reading mode
* `⌘ + 2` / `Ctrl + 2`: Switch to the Active Recall cram hub

---

## 🛠️ Technical Highlights & Architecture

* **Modern Web Core**: Built using Next.js 16, React 19, and Tailwind CSS.
* **Native macOS Shell**: Powered by Apple AppKit and WKWebView with smooth 120 FPS animations and WidgetKit synchronization.
* **Native Windows Shell**: High-efficiency standalone executable compiled via **Tauri v2** and Microsoft Edge WebView2 (~8.4 MB executable).
* **On-Device Storage**: 100% private, local state management persists notes and progress directly on your device via Zustand and `localStorage`.
* **Zero Dependencies**: Fully self-contained local build requiring no external cloud databases or account logins.

---

## 📦 Installation Instructions

### 🍎 macOS Installation (.dmg)
Because this is a free, open-source app, macOS Gatekeeper may block it from opening initially because it hasn't been signed by a paid Apple Developer account:
1. Download the latest `MacbethCodex-macOS-v1.0.dmg` file from the Releases page and double-click to open it.
2. Drag the **Macbeth** app into your **Applications** folder.
3. Try to open the app by double-clicking it. You will see an alert that it cannot be opened. Click **Done** or **OK**.
4. Open your Mac's **System Settings** and navigate to **Privacy & Security**.
5. Scroll down to the **Security** section. You will see a message stating the app was blocked to protect your Mac.
6. Click the **Open Anyway** button next to that message.
7. Enter your Mac password or use Touch ID, then click **Open** on the final popup.

*Note: You only need to do this the very first time. Afterward, you can open the app normally from Launchpad or Spotlight.*

### 🪟 Windows Installation (.exe)
1. Download `MacbethCodex.exe` from the latest GitHub Release or your download folder.
2. Place `MacbethCodex.exe` in your desired directory (e.g., Desktop or `C:\Program Files`).
3. Double-click `MacbethCodex.exe` to launch.
4. If Windows SmartScreen displays *"Windows protected your PC"*, click **More info** and select **Run anyway** (standard for open-source binaries without costly enterprise signing certificates).
5. Requires the Microsoft Edge WebView2 Runtime (pre-installed by default on Windows 10 and Windows 11).

---

## 🏗️ Building from Source

### Web Bundle
```bash
npm install
npm run build
```

### Windows Standalone (.exe via Tauri v2)
```bash
# Direct build on Windows
cargo tauri build

# Or cross-compile from macOS with cargo-xwin
cargo xwin build --release --target x86_64-pc-windows-msvc
```

---

## 🎓 IB CAS Alignment

* **Creativity**: Conceptualizing, designing, and coding a cross-platform desktop application, complete with a custom Liquid Glass user interface, academic handwriting canvas, and desktop widget synchronization.
* **Service**: Open-sourcing the software to provide secondary school literature students globally with a modern, distraction-free study companion for their exams.
