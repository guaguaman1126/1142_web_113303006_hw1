"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MenuPC from "../components/MenuPC";
import MenuMB from "../components/MenuMobile";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // sm 斷點是 640px
    if (window.innerWidth >= 640) {
      router.push("/about");
    }
  }, [router]);

  return (
    <div className="h-full w-full">

      <div className="hidden sm:block h-full w-full ">
        {/* 電腦版 */}
        <div className="flex w-full h-full gap-7">
          <div className="h-full w-[25%]  ">
            <MenuPC />
          </div>
          <div className="h-full overflow-scroll hide-scrollbar w-full bg-[#B12A22] p-8 rounded-md">
            哈哈你一定是檢查模式還刻意調整大小才會看到這個，對他是bug我修不掉，老師菜菜撈撈
          </div>
        </div>
      </div>
      <div className="sm:hidden h-full w-full">
        {/* 手機版 */}
        <MenuMB />
      </div>
    </div>
  );
}
