import { Link, useLocation } from "react-router-dom";
import './Header.css'

const NavLinks = () => {
    const links = [
        { name: "Пошук роботи", url: "jobs" },
        { name: "Пошук кандидатів", url: "talents" },
        { name: "Створити вакансію", url: "post-job" },
        { name: "Про нас", url: "about-us" },

    ]
    const location = useLocation();
    return <div className="flex gap-5 text-silver-sand-200 h-full items-center">
        {
            links.map((link) => <div className={`${location.pathname == `/${link.url}` ? "border-purple-heart-500 text-purple-heart-500" : "border-transparent"} 
            border-t-[3px] h-full flex items-center`}>
                <Link key={link.url} to={link.url.startsWith("/") ? link.url : `/${link.url}`}>
                    {link.name}
                </Link>
            </div>)
        }
    </div >
}

export default NavLinks;