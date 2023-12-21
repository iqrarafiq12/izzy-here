// import { NAV_LINKS } from "@/constants"
// import { ModeToggle } from "./ui/toggle-mode";

import NavLink from "./NavLink";

const Navbar = () => {
    return (
<div className="top-0 left-0 bg-neutral-950 w-full z-50 sticky border-transparent bg-opacity-80 backdrop-blur-md  backdrop-filter transition-opacity duration-200 ease-in-out border-b ">
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
            <div className="inline-flex flexBetween items-center justify-center px-3 py-5 ">
    <NavLink />
                     {/* <Navlink /> */}
            </div>
            
            {/* DARK MODE */}
                <div className="inline-flex items-center justify-center px-3 py-2 rounded-md">
                    {/* <ModeToggle /> */}
                    <h1> TOGGLE</h1>
                </div>
        </div>
    </div>
</div>

    );
}

export default Navbar;
