import { useEffect, useState } from "react"
import JobCard from "./JobCard"
import Sort from "./Sort"
import { getAllJobs } from "../../Services/JobService"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../Slices/FilterSlice"
import { resetSort } from "../../Slices/SortSlice"

const Jobs = () => {
    const dispatch = useDispatch()
    const [jobList, setJobList] = useState([{}])
    const filter = useSelector((state: any) => state.filter)
    const [filteredJobs, setFilteredJobs] = useState<any>([])
    const sort = useSelector((state: any) => state.sort)

    useEffect(() => {
        dispatch(resetFilter())
        dispatch(resetSort())
        getAllJobs().then((res) => {
            setJobList(res.filter((job: any) => job.jobStatus == "ACTIVE"));

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (sort === "Недавні") {
            setJobList(
                [...jobList].sort(
                    (a: any, b: any) => new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
                )
            );
        } else if (sort === "За зарплатою (від найменшої до найбільшої)") {
            setJobList(
                [...jobList].sort((a: any, b: any) => a.salaryOffered - b.salaryOffered)
            );
        } else if (sort === "За зарплатою (від найбільшої до найменшої)") {
            setJobList(
                [...jobList].sort((a: any, b: any) => b.salaryOffered - a.salaryOffered)
            );
        }

    }, [sort])

    useEffect(() => {
        let filterJob = jobList
        // console.log(filter)


        if (filter["Назва посади"] && filter["Назва посади"].length > 0) {
            filterJob = filterJob.filter((job: any) => filter["Назва посади"]?.some((title: any) => job.jobTitle?.toLowerCase().includes(title.toLowerCase())))
        }
        if (filter["Місце роботи"] && filter["Місце роботи"].length > 0) {
            filterJob = filterJob.filter((job: any) => filter["Місце роботи"]?.some((location: any) => job.location?.toLowerCase().includes(location.toLowerCase())))
        }
        if (filter["Освіта"] && filter["Освіта"].length > 0) {
            filterJob = filterJob.filter((job: any) => filter["Освіта"]?.some((edu: any) => job.eduLevelRequired?.toLowerCase().includes(edu.toLowerCase())))
        }
        if (filter["Зайнятість"] && filter["Зайнятість"].length > 0) {
            filterJob = filterJob.filter((job: any) => filter["Зайнятість"]?.some((jobType: any) => job.jobType.toLowerCase() === jobType.toLowerCase()
            ))
        }
        if (filter.salaryOffered && filter.salaryOffered.length > 0) {
            filterJob = filterJob.filter((job: any) => filter.salaryOffered[0] <= job.salaryOffered && job.salaryOffered <= filter.salaryOffered[1])
        }


        setFilteredJobs(filterJob)
    }, [filter, jobList])


    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-silver-sand-200 text-2xl font-semibold">Рекомендовані вакансії</div>
            <Sort sort="job" />
        </div>
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
            {
                filteredJobs.map((job: any, index: any) => <JobCard key={index} {...job} />)
            }
        </div>

    </div>
}
export default Jobs