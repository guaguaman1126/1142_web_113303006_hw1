
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";



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
      <body className="min-h-full flex flex-col bg-[#e1d3b6] p-7">


        <div className="flex h-full gap-7 ">

          {/* 左邊 */}
          <div className="bg-[#B12A22] w-[25%] h-full p-4 shadow-[8px_0_24px_rgba(0,0,0,0.18)] rounded-md">


            <div className="flex justify-center items-center w-full mt-[4rem]" >
              <div className="w-25 h-25 rounded-full overflow-hidden flex justify-center items-center ring-4 ring-[#4D1718]/70 shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                <Image src="/me.jpg" alt="cat" width={150} height={150} />
              </div>
            </div>


            <div className="text-center text-[#4D1718] font-bold mt-3 tracking-wide drop-shadow-[0_1px_0_rgba(255,255,255,0.15)] text-2xl">許祐寧</div>
            <div className="text-center text-[#4D1718] font-bold mb-1 tracking-wide">"只要你很努力 你就會很努力"</div>

            <div className="flex gap-2 justify-center mt-2 mb-3 ">
              {/* icons, links, images */}

              <Link
                href="https://www.instagram.com/neil_1126_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#4D1718] text-2xl transition-transform duration-200 hover:scale-110" />
              </Link>

              <Link href="https://www.facebook.com/xu.you.ning.361027?locale=zh_TW"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook className="text-[#4D1718] text-2xl transition-transform duration-200 hover:scale-110" />
              </Link>

              <Link href="https://github.com/guaguaman1126"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="text-[#4D1718] text-2xl transition-transform duration-200 hover:scale-110" />
              </Link>

            </div>


            <Link href="/about" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">關於我</div>
            </Link>

            <Link href="/hobby" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">我的興趣</div>
            </Link>


            <Link href="/projects" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">程式專案</div>
            </Link>

            <Link href="/spacer" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">徵友啟示</div>
            </Link>

            <Link href="/spacer" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">徵友啟示</div>
            </Link>

            <Link href="/test" className="no-underline hover:no-underline block">
              <div className="bg-[#e1d3b6] text-[#4D1718] text-center font-bold p-6 mt-2 rounded-md shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)]">徵友啟示</div>
            </Link>



          </div>

          {/* 右邊 */}
          <div className="bg-[#D0A575] w-full h-full shadow-inner shadow-[#9c7447]/30 rounded-md overflow-scroll hide-scrollbar">

            {children}

          </div>

        </div>

      </body>
    </html>
  );
}
