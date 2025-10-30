import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Quantum Voyager | Learn Quantum Computing",
  description:
    "Interactive roadmap, resources, and explanations to help you explore the world of quantum computing."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0f1f] text-slate-100 antialiased">
        <div className="min-h-dvh bg-[#0a0f1f] bg-grid-radial">
          <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
