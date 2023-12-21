// import { NAV_LINKS } from "@/constants"
// import { ModeToggle } from "./ui/toggle-mode";

import NavLink from "./NavLink";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
    return (
<div className="top-0 left-0 bg-gradient-to-b from-gray-900 to-gray-600  w-full z-50 sticky border-transparent bg-opacity-80 backdrop-blur-md  backdrop-filter transition-opacity duration-200 ease-in-out border-b ">
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
            <div className="inline-flex flexBetween items-center justify-center px-3 py-5 ">
      {/* <Navlink /> */}
    <NavLink />
            </div>
            
            {/* DARK MODE */}
                <div className="inline-flex text-white items-center justify-center px-3 py-2 rounded-md">
                    {/* <ModeToggle /> */}
                    <ModeToggle />
                </div>
        </div>
    </div>
</div>

    );
}

export default Navbar;
