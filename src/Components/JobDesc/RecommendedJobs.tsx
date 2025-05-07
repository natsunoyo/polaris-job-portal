import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobPage/JobCard";


const RecommendedJobs = () => {
    return <div className="ml-8">
        <div className="text-2xl font-semibold mb-5">Рекомендовані вакансії</div>
        <div className="flex flex-col flex-wrap gap-5">
            {jobList.map((talent, index) => index < 6 && <JobCard key={index} {...talent} />)}
        </div>
    </div>
}
export default RecommendedJobs;