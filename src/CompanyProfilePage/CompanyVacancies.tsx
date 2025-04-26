import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobPage/JobCard";


const CompanyVacancies = () => {
    return <div>
        <div className="flex flex-wrap gap-10">
            {jobList.map((talent, index) => index < 6 && <JobCard key={index} {...talent} />)}
        </div>
    </div>
}
export default CompanyVacancies;