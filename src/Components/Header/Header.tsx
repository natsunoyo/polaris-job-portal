import { Button, Indicator } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    useEffect(() => {
        getProfile(user?.id).then((response) => {
            dispatch(setProfile(response));
        }).catch((error: any) => {
            console.log(error);
        })
    }, [user?.id])
    const location = useLocation();
    return location.pathname != "/signup" && location.pathname != "/login" && <div className="w-full bg-woodsmoke-950 text-white px-4 h-40 flex justify-between items-center gap-10 ">

        {/* Logo */}
        <div className="flex gap-3 items-center pl-3" >
            <img src="\assets\star.svg" className="h-15 w-15" />
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