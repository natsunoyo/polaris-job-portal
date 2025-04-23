import { talentsData } from "../Data/TalentsData";
import TalentCard from "../FindTalentsPage/TalentCard";

const RecommendedTallent = () => {
    return <div className="ml-8">
        <div className="text-2xl font-semibold mb-5">Рекомендовані люди</div>
        <div className="flex flex-col flex-wrap gap-5">
            {talentsData.map((talent, index) => index < 4 && <TalentCard key={index} {...talent} />)}
        </div>
    </div>
}
export default RecommendedTallent;