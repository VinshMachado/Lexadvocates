import Image from "next/image";
import Heros from "./Mycomponents/Heros";
import { Aboutus } from "./Mycomponents/Aboutus";
import History from "./Mycomponents/History";

export default function Home() {
  return (
    <>
      <Heros /> <Aboutus />
      <History />
    </>
  );
}
