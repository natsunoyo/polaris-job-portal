import { talentsData } from "../../Data/TalentsData"
import TalentCard from "./TalentCard"
import Sort from "../FindJobPage/Sort"

const Talents = () => {
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-silver-sand-200 text-2xl font-semibold">Кандидати</div>
            <Sort />
        </div>
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
            {
                talentsData.map((talent, index) => <TalentCard key={index} {...talent} />)
            }
        </div>

    </div>
}
export default Talents