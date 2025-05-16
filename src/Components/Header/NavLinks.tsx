import { Link, useLocation } from "react-router-dom";


const NavLinks = () => {
    const links = [
        { name: "Пошук роботи", url: "jobs" },
        { name: "Пошук кандидатів", url: "talents" },
        { name: "Створити вакансію", url: "post-job" },
        { name: "Опубліковані вакансії", url: "posted-jobs/0" },
        { name: "Історія", url: "job-history" },

    ]
    const location = useLocation();
    return <div className="flex gap-5 text-silver-sand-200 h-full items-center">
        {
            links.map((link) => (
                <div key={link.url} className={`${location.pathname === `/${link.url}` ? "border-purple-heart-500 text-purple-heart-500" : "border-transparent"} border-t-[3px] h-full flex items-center`}>
                    <Link to={link.url.startsWith("/") ? link.url : `/${link.url}`}>
                        {link.name}
                    </Link>
                </div>
            ))

        }
    </div >
}

export default NavLinks;