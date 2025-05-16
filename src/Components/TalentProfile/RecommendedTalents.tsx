import { useParams } from "react-router-dom";
import TalentCard from "../FindTalentsPage/TalentCard";

const RecommendedTalent = (props: any) => {
    const { id } = useParams()
    return <div className="ml-8">
        <div className="text-2xl font-semibold mb-5">Рекомендовані люди</div>
        <div className="flex flex-col flex-wrap gap-5">
            {props?.talents?.map((talent: any, index: any) => index < 4 && id != talent.id && <TalentCard key={index} {...talent} />)}
        </div>
    </div>
}
export default RecommendedTalent;