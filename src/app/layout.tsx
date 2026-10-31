import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} dark`}
    >
      <body className="font-sans antialiased selection:bg-rose-500/30 selection:text-rose-100">
        {children}
      </body>
    </html>
  );
}
