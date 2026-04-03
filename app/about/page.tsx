"use client"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <div className="w-full max-w-5xl text-lg rounded-2xl bg-[#f4ede1] overflow-hidden">
        <div className="bg-[#B12A22] px-6 py-6">
          <div className="text-4xl font-bold text-[#f6ead6] tracking-wide">關於我</div>
          <div className="text-[#f6ead6]/90 mt-1">學歷、競賽與相關執照</div>
        </div>

        <div className="p-6 space-y-6">
          <div className="rounded-xl bg-[#e9dcc3] p-5">
            <div className="text-3xl font-bold mb-4 text-[#4D1718] tracking-wide">學歷</div>
            <div className="space-y-2 text-[#4D1718]">
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>縣立二林國民小學</span></div>
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>縣立竹塘國民中學</span></div>
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>國立員林高級中學</span></div>
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>國立政治大學資訊管理學系</span></div>
            </div>
          </div>

          <div className="rounded-xl bg-[#e9dcc3] p-5 flex items-start gap-6">
            <div className="flex-1">
              <div className="text-3xl font-bold mb-4 text-[#4D1718] tracking-wide">競賽證明</div>
              <div className="space-y-2 text-[#4D1718]">
                <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>於二林國小不知道第幾屆校際運動會不知道甚麼項目第三名</span></div>
                <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>於竹塘國中時拿下全國學生音樂比賽直笛四重奏安慰獎</span></div>
                <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>於員林高中衛生糾察隊多次缺席記點乙次</span></div>
              </div>
            </div>
            <div className="relative w-52 aspect-4/3 rounded-3xl overflow-hidden shrink-0">
              <Image className="rounded-3xl object-cover" src="/aboutMeWin.jpg" alt="win" fill />
            </div>
          </div>

          <div className="rounded-xl bg-[#e9dcc3] p-5">
            <div className="text-3xl font-bold mb-4 text-[#4D1718] tracking-wide">相關執照</div>
            <div className="space-y-2 text-[#4D1718]">
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>中華民國小型車普通駕駛執照</span></div>
              <div className="flex items-start gap-2"><span className="text-[#B12A22]">※</span><span>中華民國普通輕型機車駕駛執照</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
