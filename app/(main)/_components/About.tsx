import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mt-[-80px]"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-zinc-700 cursor-pointer hover:-translate-y-1 transition hover:scale-110 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold dark:text-white max-w-[600px] w-auto h-auto pt-28">
          ABOUT ME
        </h1>
        <p className="tracking-[0.5em] pb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-zinc-600 text-center dark:text-zinc-200 ">
          Hailing from Karachi, Pakistan, I am a dedicated software developer
          with a foundation rooted in web development, which I began honing
          under the guidance of the esteemed 10 Pearls company. My commitment to
          professional growth led me to attain certification in Web and App
          Hybrid Development in 2023 from UIT university. Since then, I have
          fervently pursued my career as a programmer, embracing every
          opportunity to further my expertise.
          <br />
          <br />
          Venturing into the realm of social media, I have established myself as
          a content creator, actively growing my channel and crafting content to
          benefit aspiring developers. My primary objectives encompass both
          personal and collective growth: I am determined to amplify my skill
          set, collaborate with leading companies to gain invaluable experience,
          and most importantly, extend my support to individuals navigating
          challenges in their careers.
          <br />
          <br />
          In terms of technical proficiency, I am well-versed in a myriad of
          languages and tools. Notably, I have cultivated expertise in Next.js,
          Tailwind CSS, and TypeScript, which form the cornerstone of my
          development project&#39;s.
        </p>
      </div>
    </section>
  );
};

export default About;
