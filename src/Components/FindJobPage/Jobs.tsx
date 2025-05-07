import { jobList } from "../../Data/JobsData"
import JobCard from "./JobCard"
import Sort from "./Sort"

const Jobs = () => {
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-silver-sand-200 text-2xl font-semibold">Рекомендовані вакансії</div>
            <Sort />
        </div>
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>

    </div>
}
export default Jobs