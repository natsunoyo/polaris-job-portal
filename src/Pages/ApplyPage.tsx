import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate, useParams } from "react-router-dom"
import ApplyComp from "../Components/ApplyPage/ApplyComp"
import { useState, useEffect } from "react"
import { getJob } from "../Services/JobService"

const ApplyPage = () => {
    const navigate = useNavigate()
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

    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner'] p-4">
        <div className="my-4 px-5 inline-block pl-3">
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </div>
        <ApplyComp {...job} />

    </div>
}

export default ApplyPage