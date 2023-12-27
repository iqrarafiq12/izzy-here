import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center items-center min-h-screen gap-5 max-container mx-auto p-10 z-30">
      
      <div className="relative w-full md:w-auto lg:w-full xl:w-auto mb-10 md:mb-0 lg:mb-10 xl:mb-0">
        <div className="text-zinc-700 cursor-pointer hover:-translate-y-1 transition hover:scale-110 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold dark:text-white max-w-[600px] w-auto h-auto pt-28">
          IQRA RAFIQ
        </div>
        <p className="text-2xl font-medium tracking-tighter text-zinc-500 dark:text-zinc-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Create Content
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-black dark:text-rose-100 my-5 max-w-[600px]">
          Passionate Software Developer with a focus on Full Stack development,
          dedicated to crafting elegant and user-friendly Web & App applications.
        </p>
        <div className="text-md justify-center">
          <Link href="mailto:iqrak0128@gmail.com">
          <Button
            variant="outline"
            className="z-[1] p-4 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:border-transparent"
          >
            Contact Me
          </Button>
          </Link>
        </div>
      </div>
      
      <div className="justify-center items-center w-full max-w-[500px]">
        <Image src="/Assets/Hero-Img.svg" height={700} width={700} alt="Iqra Rafiq"/>
      </div>
      
    </div>
  )
}

export default Hero;
