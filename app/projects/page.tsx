"use client"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {

  return (
    <div className="min-h-screen rounded-md bg-[#B12A22]  p-8">
      <div className="space-y-8">
        <div className="rounded-t-[28px] rounded-b-[10px] bg-[#6a8576] px-6 py-5">
          <h1 className="text-4xl font-bold text-[#4D1718]">我的程式專案</h1>
          <p className="text-xl text-[#4D1718]">功力不足只能搞抽象</p>
        </div>

        <article className="group rounded-[10px] bg-[#f8edd8] p-6 text-[#4D1718]">
          <div className="flex gap-6">
            <div className="mt-5 w-[30%] rounded-xl">
              <p className="text-7xl font-black leading-none text-[#6A8576]/25">01</p>
              <h2 className="mt-2 text-4xl font-bold">猜拳攻城</h2>
              <p className="mt-4 text-lg leading-8">
                暑假無聊做了一個白痴遊戲，可以用手機和平板雙人對戰，雙方要往前走碰到就要猜拳輸的就要從出生點重新走，就醬。
              </p>

              <Link
                href="https://guaguaman1126.github.io/idoitgame/minigame.html"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-lg bg-[#6A8576] px-5 py-3 text-base font-bold text-white opacity-0 -translate-y-full transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                點我前往遊戲畫面
              </Link>
            </div>

            <video
              className="h-auto w-[70%] rounded-xl object-contain"
              controls
              preload="metadata"
            >
              <source src="/projectsGameVid1.mp4" type="video/mp4" />
              您的瀏覽器不支援影片播放。
            </video>
          </div>




        </article>

        <article className="group rounded-t-[10px] rounded-b-[28px] bg-[#f8edd8] p-6 text-[#4D1718]">
          <div className="flex gap-6">
            <div className="mt-5 w-[30%] rounded-xl">
              <p className="text-7xl font-black leading-none text-[#6A8576]/25">02</p>
              <h2 className="mt-2 text-4xl font-bold">Tea Master Supreme</h2>
              <p className="mt-4 text-lg leading-8">
                第一次做雙人連線遊戲被各種資料庫搞瘋，這遊戲叫Tea Master Supreme，其實就是線上的國小生桌遊*猜猜我是誰*<br />但是！你可以放家人 朋友 前任 情敵 任何人的照片上去，盡情享受成為gossip girl 的樂趣💅💅<br />歐但資料庫好像壞掉了所以目前不能玩
              </p>

              <Link
                href="https://guaguaman1126.github.io/guessWho/home.html"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-lg bg-[#6A8576] px-5 py-3 text-base font-bold text-white opacity-0 -translate-y-full transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                點我前往遊戲畫面
              </Link>
            </div>

            <div className="mt-5 w-[70%] flex gap-6">
              <video
                className="w-[40%] rounded-xl object-contain"
                controls
                preload="metadata"
              >
                <source src="/projectsGameVid2.mp4" type="video/mp4" />
                您的瀏覽器不支援影片播放。
              </video>

              <div className="w-[60%] overflow-hidden rounded-xl border">
                <Image
                  src="/projectsGamePic.jpeg"
                  alt="Tea Master Supreme"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>


        </article>
      </div>
    </div>
  );
}
