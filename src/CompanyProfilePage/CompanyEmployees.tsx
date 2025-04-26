import { talentsData } from "../Data/TalentsData"
import TalentCard from "../FindTalentsPage/TalentCard"

const CompanyEmployees = () => {
    return <div className="flex flex-wrap gap-10">
        {
            talentsData.map((talent, index) => <TalentCard key={index} {...talent} />)
        }
    </div>
}

export default CompanyEmployees
