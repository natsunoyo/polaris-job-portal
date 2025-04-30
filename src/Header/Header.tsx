import { Indicator } from "@mantine/core";
import { IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
    const location = useLocation();
    return location.pathname != "/signup" && location.pathname != "/login" && <div className="w-full bg-woodsmoke-950 text-white px-4 h-40 flex justify-between items-center gap-10 ">

        {/* Logo */}
        <div className="flex gap-3 items-center" >
            <img src="src\assets\star.svg" className="h-15 w-15" />
            <Link to={'/*'}>
                <div className="text-3xl font-semibold flex gap-5 text-purple-heart-400">Polaris</div>
            </Link>
        </div>

        {/* Links */}

        {NavLinks()}


        {/* Profile */}
        <div className="flex gap-5 items-center">


            <ProfileMenu />
            <Indicator color="purpleHeart.5">
                <IconBell />
            </Indicator>
            <IconSettings />

        </div>
    </div>
}

export default Header;