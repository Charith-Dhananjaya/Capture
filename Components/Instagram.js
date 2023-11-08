import React from "react";
import img1 from "@/public/1.jpg"
import img2 from "@/public/2.jpg"
import img3 from "@/public/3.jpg"
import img4 from "@/public/4.jpg"
import img5 from "@/public/5.jpg"
import img6 from "@/public/6.jpg"
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="text-black max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 ">
        <InstagramImg socialImg={img1}/>
        <InstagramImg socialImg={img2}/>
        <InstagramImg socialImg={img3}/>
        <InstagramImg socialImg={img4}/>
        <InstagramImg socialImg={img5}/>
        <InstagramImg socialImg={img6}/>
      </div>
    </div>
  );
};

export default Instagram;
