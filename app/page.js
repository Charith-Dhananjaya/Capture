import Image from "next/image";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import Slider from "@/Components/Slider";
import { SliderData } from "@/Components/SliderData";
import Instagram from "@/Components/Instagram";


export default function Home() {
  return (
    <div className=" bg-white">
      <NavBar />
      <Hero
        heading="captur Photography"
        message="I capture moments in nature and keep them alive."
      /> 
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
} 
