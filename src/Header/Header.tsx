import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
    return <div className="w-full bg-woodsmoke-950 text-white px-4 h-40 flex justify-between items-center gap-10">

        {/* Logo */}
        <div className="flex gap-3 items-center" >
            <img src="src\assets\star.svg" className="h-15 w-15" />
            <Link to={'*'}>
                <div className="text-3xl font-semibold flex gap-5">Polaris</div>
            </Link>
        </div>

        {/* Links */}

        {NavLinks()}


        {/* Profile */}
        <div className="flex gap-5 items-center">

            <div className="flex gap-2 items-center">
                <div>Профіль</div>
                <Avatar src="avatar.png" />
            </div>
            <Indicator color="purpleHeart.5">
                <IconBell />
            </Indicator>
            <IconSettings />

        </div>
    </div>
}

export default Header;