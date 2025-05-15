import Image from "next/image";
import Heros from "./Mycomponents/Heros";
import { Aboutus } from "./Mycomponents/Aboutus";

export default function Home() {
  return (
    <>
      <Heros /> <Aboutus />
    </>
  );
}
