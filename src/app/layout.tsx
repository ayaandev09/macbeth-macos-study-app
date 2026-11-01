import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-rose-500/30 selection:text-rose-100 font-sans">
        {children}
      </body>
    </html>
  );
}
