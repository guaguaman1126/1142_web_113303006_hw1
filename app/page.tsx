import { redirect } from "next/navigation";
import Menu from "../components/Menu";

export default function Home() {
  redirect("/about");

  <>

    <div>
      <Menu />
      首頁
    </div>
  </>
}
