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
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Patrick+Hand&family=Caveat:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-rose-500/30 selection:text-rose-100 font-handwritten">
        {children}
      </body>
    </html>
  );
}
