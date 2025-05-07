import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../Components/JobDesc/JobDesc"
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs"

const JobDescPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">

        <Link className="my-4 px-5 inline-block pl-3" to="/jobs">
            <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>

        <div className="flex gap-5 justify-around">
            <JobDesc />
            <RecommendedJobs />
        </div>
    </div>
}

export default JobDescPage
