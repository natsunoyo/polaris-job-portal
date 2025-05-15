import { useParams } from "react-router-dom";
import JobCard from "../FindJobPage/JobCard";
import { useState, useEffect } from "react";
import { getAllJobs, } from "../../Services/JobService";


const RecommendedJobs = () => {
    const [jobList, setJobList] = useState<any>(null)
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        getAllJobs().then((res) => {
            setJobList(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    return <div className="ml-8">
        <div className="text-2xl font-semibold mb-5">Рекомендовані вакансії</div>
        <div className="flex flex-col flex-wrap gap-5">
            {
                jobList?.map((job: any, index: number) => index < 6 && id != job.id && <JobCard key={index} {...job} />)
            }
        </div>
    </div>
}
export default RecommendedJobs;