"use client"

import MenuPC from "@/components/MenuPC";

export default function Hobby() {
  return (
    <div className="flex h-full w-full gap-7 ">
      <div className="hidden sm:block h-full w-[25%]  ">
        <MenuPC />
      </div>
      <div
        className="h-full w-full bg-white bg-repeat p-4 sm:p-8 rounded-md overflow-scroll hide-scrollbar"
        style={{
          backgroundImage: "url('/aboutMeMe2.png')",
          backgroundSize: "100px auto",
          fontFamily: '"DFKai-SB", "BiauKai", serif'
        }}
      >
        <div className="border-4 border-black bg-[#002B7F] p-3">
          <div
            className="text-center text-6xl font-black italic underline text-[#FF0000]"
            style={{
              transform: "scaleX(1.2)",
              letterSpacing: "0.2em",
              textShadow: "3px 3px 0 #FFD700, -3px -3px 0 #00FF66"
            }}
          >
            徵友啟示
          </div>
          <div
            className="mt-2 bg-[#FFD700] p-1 text-center text-3xl text-[#D40000]"
            style={{
              fontFamily: '"MingLiU", "PMingLiU", serif',
              transform: "scaleY(1.1)"
            }}
          >
            非誠勿擾，誠意交友
          </div>
        </div>

        <table
          cellPadding={12}
          cellSpacing={0}
          style={{
            border: "4px solid #000",
            borderCollapse: "collapse",
            marginTop: "16px",
            backgroundColor: "#fff",
            width: "100%",
            height: "auto"
          }}
        >
          <tbody>
            <tr>
              <td style={{ border: "2px solid #000", background: "#002B7F", color: "#fff", width: "32%", verticalAlign: "top" }}>
                <div style={{ fontSize: "36px", fontWeight: 900, marginBottom: "8px" }}>本人近照</div>
                <img
                  src="/me.jpg"
                  alt="徵友本人"
                  width={300}
                  height={420}
                  style={{ border: "4px solid #FFD700", width: "100%", height: "auto" }}
                />
              </td>
              <td style={{ border: "2px solid #000", background: "#FFD700", color: "#000", width: "68%", verticalAlign: "top" }}>
                <table cellPadding={8} cellSpacing={0} style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000", background: "#fff" }}>
                  <tbody>
                    <tr>
                      <td style={{ border: "2px solid #000", background: "#FF0000", color: "#fff", width: "28%", fontWeight: 700 }}>身高 / 體重</td>
                      <td style={{ border: "2px solid #000", background: "#fff" }}>168 / 56</td>
                    </tr>
                    <tr>
                      <td style={{ border: "2px solid #000", background: "#FF0000", color: "#fff", fontWeight: 700 }}>生活習慣</td>
                      <td style={{ border: "2px solid #000", background: "#fff" }}>不抽菸，不吃檳榔</td>
                    </tr>
                    <tr>
                      <td style={{ border: "2px solid #000", background: "#FF0000", color: "#fff", fontWeight: 700 }}>聯絡電話</td>
                      <td style={{ border: "2px solid #000", background: "#fff", fontSize: "28px", fontWeight: 900, color: "#002B7F" }}>0800-676-767</td>
                    </tr>
                    <tr>
                      <td style={{ border: "2px solid #000", background: "#FF0000", color: "#fff", fontWeight: 700 }}>優點</td>
                      <td style={{ border: "2px solid #000", background: "#fff" }}>大便會用濕紙巾，乾淨溜丟。</td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ marginTop: "10px", border: "2px solid #000", background: "#39FF14", padding: "10px", fontSize: "26px", fontWeight: 900 }}>
                  尋求一位能包容我的有緣人，沒有的話包養也行。
                </div>
                <div style={{ marginTop: "8px", border: "2px solid #000", background: "#FF00AA", color: "#fff", padding: "10px", fontSize: "24px", fontWeight: 900 }}>
                  我說怎麼一直拉肚子，原來是想你的心一便又一便。
                </div>
                <div style={{ marginTop: "8px", border: "2px solid #000", background: "#000", color: "#FFD700", padding: "10px", fontSize: "24px", fontWeight: 900 }}>
                  我想不到。
                </div>
              </td>
            </tr>
          </tbody>
        </table>



      </div>
    </div>

  );
}
