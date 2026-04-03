"use client"
import Image from "next/image"

export default function Hobby() {
  return (
    <div className="min-h-screen bg-[#D0A575] p-8 rounded-md" >
      
      
        <div className="space-y-8"  >
          <article className="rounded-[28px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="group relative h-[320px] w-[42%] shrink-0 overflow-hidden rounded-[24px]">
                <Image src="/hobbyWatching.jpg" alt="追劇" fill className="object-cover" />
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/55">
                  <p className="text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">教練，我想追新番</p>
                </div>
              </div>
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">01</p>
                <h2 className="mt-1 text-4xl font-bold">追劇</h2>
                <p className="mt-4 text-lg leading-8">追美劇追動漫，美劇可能是良善之地(好久之前看的)，怪奇物語還滿不錯給一個頂級，主要是看動漫居多，最推天國大魔鏡夯爆了，劇情寫得很精細。但現在好像也沒時間看劇我要哭了，都沒在看新番，上學期還會看廣智下飯的說
                  精神食糧</p>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">02</p>
                <h2 className="mt-1 text-4xl font-bold">聽音樂</h2>
                <p className="mt-4 text-lg leading-8">平時主要聽日文與英文歌曲。最愛的是 羊文学 (Hitsujibungaku)，有種獨特的 Chill 與鬆弛感非常吸引我；此外，像是 綠黃色社會、星野源、YOASOBI 等動漫常客也多少有聽。英文歌方面，比較幾乎都是主流的像是Sabrina Carpenter、Olivia Rodrigo 與 Laufey 等。</p>
              </div>
              <div className="group relative h-[320px] w-[42%] shrink-0 overflow-hidden rounded-[24px]">
                <Image src="/hobbyMusic.jpg" alt="聽音樂" fill className="object-cover" />
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/55">
                  <p className="text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">聽到耳朵懷雙胞胎</p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] bg-[#f8edd8] p-5">
            <div className="flex gap-6">
              <div className="group relative h-[320px] w-[42%] shrink-0 overflow-hidden rounded-[24px]">
                <Image src="/hobbyScrolling.gif" alt="活網抽象仔" fill className="object-cover" />
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/55">
                  <p className="text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">精神食糧</p>
                </div>
              </div>
              <div className="w-[58%] text-[#4D1718]">
                <p className="text-7xl font-black leading-none text-[#6A8576]/25">03</p>
                <h2 className="mt-1 text-4xl font-bold">活網抽象仔</h2>
                <p className="mt-4 text-lg leading-8">每天於 Threads、IG、Dcard 三點一線，照三餐滑。涉略範圍從直男梗（成都超人、唐突惡臭）到圈內（Floptropica、康熙）皆有。對於比較政治不正確的梗，保持「不理解但尊重」。最喜歡無政治性別立場、抽象腦腐的怪咚咚。每日定時攝取迷因，保持身心靈富足。</p>
              </div>
            </div>
          </article>
        </div>
      
    </div>
  );
}
