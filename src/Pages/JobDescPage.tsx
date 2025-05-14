import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useParams } from "react-router-dom"
import JobDesc from "../Components/JobDesc/JobDesc"
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs"
import { useEffect, useState } from "react"
import { getJob } from "../Services/JobService"

const JobDescPage = () => {
    const [job, setJob] = useState<any>(null)
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        getJob(id).then((res) => {
            setJob(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])


    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">

        <Link className="my-4 px-5 inline-block pl-3" to="/jobs">
            <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>

        <div className="flex gap-5 justify-around">
            <JobDesc {...job} />
            <RecommendedJobs />
        </div>
    </div>
}

export default JobDescPage
