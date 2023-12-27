
import NavLink from "./NavLink";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
    return (

        <header className='sticky top-0 z-20 border-b bg-gradient-to-b from-gray-900 to-gray-600  border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between  '>
        <nav className='flex justify-between items-center w-full p-10 '>
      {/* <Navlink /> */}
    <NavLink />
            {/* DARK MODE */}
                <div className="inline-flex text-white items-center justify-center px-3 py-2 rounded-md">
                    {/* <ModeToggle /> */}
                    <ModeToggle />
                </div>
</nav>
</header>

    );
}

export default Navbar;
