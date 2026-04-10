"use client"
import Image from "next/image"
import MenuPC from "../../components/MenuPC";

export default function About() {
  return (
    <div className="flex h-full w-full gap-7 ">
      
      <div className="hidden sm:block h-full w-[25%]  ">
        <MenuPC />
      </div>



      <div className="h-full overflow-scroll hide-scrollbar w-full bg-[#B12A22] p-4 sm:p-8 rounded-md">
        <div className="space-y-8">
          <div className="rounded-t-[28px] rounded-b-[10px] bg-[#6a8576] px-6 py-5">
            <h1 className="text-4xl font-bold text-[#4D1718]">關於我</h1>
            <p className="text-xl text-[#4D1718]">可以跟圖片互動歐!</p>
          </div>

          <article className="rounded-[10px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="group relative h-80 w-[42%] shrink-0 overflow-hidden rounded-[24px] bg-[#9dcc3]">
                <Image src="/aboutMeMe.jpg" alt="學歷" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-120" />


                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-linear-to-r from-white/85 via-white/50 to-transparent opacity-0 -translate-x-full transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"></div>

                <Image src="/aboutMeMe2.png" alt="學歷" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-150" />
              </div>
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">01</p>
                <h2 className="mt-1 text-4xl font-bold">學歷</h2>
                <div className="mt-4 space-y-2 text-lg leading-8">
                  <p>※ 縣立二林國民小學</p>
                  <p>※ 縣立竹塘國民中學</p>
                  <p>※ 國立員林高級中學</p>
                  <p>※ 國立政治大學資訊管理學系</p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[10px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">02</p>
                <h2 className="mt-1 text-4xl font-bold">競賽證明</h2>
                <div className="mt-4 space-y-2 text-lg leading-8">
                  <p>※ 於二林國小不知道第幾屆校際運動會不知道甚麼項目第三名</p>
                  <p>※ 於竹塘國中時拿下全國學生音樂比賽直笛四重奏安慰獎</p>
                  <p>※ 於員林高中衛生糾察隊多次缺席記點乙次</p>
                </div>
              </div>
              <div className="group relative h-80 w-[42%] shrink-0 overflow-hidden rounded-[24px] bg-[#e9dcc3]">
                <Image src="/aboutMeWin.jpg" alt="競賽證明" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-linear-to-r from-white/85 via-white/50 to-transparent opacity-0 -translate-x-full transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 "></div>
                <Image src="/aboutMeWin2.png" alt="競賽證明" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-250  group-hover:translate-y-[-5%]" />
              </div>
            </div>
          </article>

          <article className="rounded-t-[10px] rounded-b-[28px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="group relative h-80 w-[42%] shrink-0 overflow-hidden rounded-[24px] bg-[#e9dcc3]">
                <Image src="/aboutMeCar.png" alt="相關執照" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-linear-to-r from-white/85 via-white/50 to-transparent opacity-0 -translate-x-full transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 "></div>
                <Image src="/aboutMeCar22.png" alt="相關執照" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-contain opacity-0 translate-x-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">03</p>
                <h2 className="mt-1 text-4xl font-bold">相關執照</h2>
                <div className="mt-4 space-y-2 text-lg leading-8">
                  <p>※ 中華民國小型車普通駕駛執照</p>
                  <p>※ 中華民國普通輕型機車駕駛執照</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  );
}
