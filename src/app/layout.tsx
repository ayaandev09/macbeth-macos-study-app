import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "DUNSINANE // MACBETH — macOS Liquid Glass Study Database",
  description:
    "Interactive macOS & iOS 26 Liquid Glass Study Dashboard for William Shakespeare's Macbeth — All 5 Acts, 31 Scenes, Sub-Sections, Quad-Source Synthesis (Google Doc, SparkNotes, LitCharts, RSC), Themes, and Folio Lexicon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark" data-academic-font="jakarta" data-handwritten-style="jakarta">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem("study-app-theme")==="light"){document.documentElement.classList.add("theme-light")}}catch(e){}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Patrick+Hand&family=Comic+Neue:wght@400;700&family=Architects+Daughter&family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020308] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-100 min-h-screen font-sans">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
