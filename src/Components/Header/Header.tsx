import { Button, Indicator } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state: any) => state.user);
    const location = useLocation();
    return location.pathname != "/signup" && location.pathname != "/login" && <div className="w-full bg-woodsmoke-950 text-white px-4 h-40 flex justify-between items-center gap-10 ">

        {/* Logo */}
        <div className="flex gap-3 items-center pl-3" >
            <img src="src\assets\star.svg" className="h-15 w-15" />
            <Link to={'/'}>
                <div className="text-3xl font-semibold flex gap-5 text-purple-heart-400">Polaris</div>
            </Link>
        </div>

        {/* Links */}

        {NavLinks()}


        {/* Profile */}
        <div className="flex gap-5 pr-3 items-center">


            {user ? <ProfileMenu /> : <Link to="/login">
                <Button variant="subtle" size="lg" color="purpleHeart.4">Увійти</Button>
            </Link>}
            <Indicator color="purpleHeart.5">
                <IconBell />
            </Indicator>

        </div>
    </div>
}

export default Header;