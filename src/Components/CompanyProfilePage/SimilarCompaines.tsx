import { similar } from "../../Data/AboutCompanyData"
import CompanyJobCard from "./CompanyJobCard"

const SimilarCompanies = () => {
    return <div className="w-1/4">
        <div className="text-2xl font-semibold mb-5">Схожі компанії</div>
        <div className="flex flex-col flex-wrap gap-5">
            {
                similar.map((company, index) => <CompanyJobCard key={index} {...company} />)
            }
        </div>
    </div>
}

export default SimilarCompanies