
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Link from "next/link";
import { FaFacebook, FaGithub, FaHome, FaInstagram } from "react-icons/fa";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "許祐寧的個人履歷",
  description: "許祐寧的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col bg-[#D0A575] p-0 sm:p-7">

        {/* 右邊 */}
        <div className="bg-[#D0A575] w-full h-full rounded-md">
          <div className="fixed right-4 top-4 z-50 sm:hidden">
            <Link
              href="/"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f8edd8] text-[#4D1718] shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
              aria-label="回到首頁"
            >
              <FaHome className="text-xl" />
            </Link>
          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
