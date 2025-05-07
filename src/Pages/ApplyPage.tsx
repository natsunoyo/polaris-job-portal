import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import ApplyComp from "../Components/ApplyPage/ApplyComp"

const ApplyPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner'] p-4">
        <Link className="my-4 px-5 inline-block pl-3" to="/job-description">
            <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>
        <ApplyComp />

    </div>
}

export default ApplyPage