import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data.tsx";

// A looping row of companies` logos
const Companies = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center text-semibold text-silver-sand-200 ">
            Понад <span className="text-purple-heart-500">100+ </span>компаній вже з нами
        </div>
        <Marquee pauseOnHover> {
            companies.map((company) => <div key={company} className="mx-8 px-2 py-1 mt-16 hover:bg-woodsmoke-900 rounded-xl cursor-pointer r">
                <img className="h-16" src={`src/assets/companies/${company}.png`} alt={`${company}`} />
            </div>)
        }
        </Marquee>
    </div>
}
export default Companies