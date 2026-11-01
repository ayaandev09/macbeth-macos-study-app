import type { Metadata } from "next";
import { Kalam, Patrick_Hand, Caveat } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
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
      className={`${kalam.variable} ${patrickHand.variable} ${caveat.variable} dark`}
    >
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
