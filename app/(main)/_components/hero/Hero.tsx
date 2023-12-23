"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col bg-black items-center justify-center px-20 z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="flex flex-col gap-6 mt-[80px] cursor-pointer hover:-translate-y-1  transition  hover:scale-110  ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
         IQRA RAFIQ
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-indigo-100 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-rose-100 my-5 max-w-[600px]">
          Passionate Software Developer with a focus on Full Stack development,
          dedicated to crafting elegant and user-friendly Web & App applications.
        </p>
        <div className="text-md flex justify-center">
          <Button
            onClick={() => window.open("mailto:iqrak0128@gmail.com")}
            variant="outline"
            className="z-[1] padding-20 text-white hover:bg-white hover:text-black font-semibold hover:border-transparent"
          >
            Contact Me
          </Button>
        </div>
        <div className="justify-center flex ">
          <Image src="/Assets/Hero-Img.svg" height={500} width={500} alt="Iqra Rafiq" />
        </div>
        <div className="justify-center flex mt-[-200px] fixed">
          <Image src="/Assets/vector.svg" height={600} width={700} alt="Iqra Rafiq"/>
        </div>
        <div className="justify-center flex mt-[-170px] ml-[-700px] fixed">
          <Image src="/Assets/HeroBG.svg" height={800} width={2000} alt="Iqra Rafiq" />
        </div>
      </div>
    </div>
  );
};

export default Hero;