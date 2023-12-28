
const ServicesTitle = () => {
    return (
      <section
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mt-[-80px]"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-zinc-700 cursor-pointer hover:-translate-y-1 transition hover:scale-110 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-[50px] font-semibold dark:text-white max-w-[600px] w-auto h-auto pt-28">
      MY SERVICES
        </h1>
        <p className="tracking-[0.3em] pb-6 font-lighter text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
        As a dedicated software developer, I offer
        </p>
      </div>
    </section>
    )
}

export default ServicesTitle