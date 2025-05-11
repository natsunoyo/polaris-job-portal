import { IconBrandBluesky, IconBrandInstagram, IconBrandTelegram } from "@tabler/icons-react"
import { footerLinks } from "../../Data/Data"
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return location.pathname != "/signup" && location.pathname != "/login" && <div className="pt-20 pb-5 flex gap-5 justify-around bg-woodsmoke-950">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-3 items-center" >

                {/* Logo, slogan and social media */}
                <img src="src\assets\star.svg" className="h-10 w-10" />
                <div className="text-xl font-semibold flex gap-5 text-white">Polaris</div>
            </div>
            <div className="text-sm text-silver-sand-400">Your guiding star of your career journey.</div>
            <div className="flex gap-3 text-purple-heart-400 [&>div]:bg-woodsmoke-900 
            [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer ">
                <div className="hover:bg-woodsmoke-800"><IconBrandTelegram /></div>
                <div className="hover:bg-woodsmoke-800"><IconBrandBluesky /></div>
                <div className="hover:bg-woodsmoke-800"><IconBrandInstagram /></div>
            </div>
        </div>

        {/* Links for the support, product core functions and the company info */}
        {
            footerLinks.map((item, index) => <div key={index}>
                <div className="text-lg text-purple-heart-400 font-semibold mb-4">{item.title}</div>
                {
                    item.links.map((link, index) => <div key={index} className="text-silver-sand-200 text-sm 
                    hover:text-purple-heart-400 cursor-pointer mb-1">
                        {link}
                    </div>)

                }
            </div>)
        }
    </div>
}

export default Footer
