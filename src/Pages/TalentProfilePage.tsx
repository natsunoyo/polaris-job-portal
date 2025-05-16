import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"
import Profile from "../Components/TalentProfile/Profile"
import RecommendedTalent from "../Components/TalentProfile/RecommendedTalents"
import { useEffect, useState } from "react"
import { getAllProfiles } from "../Services/ProfileService"

const TalentProfilePage = () => {
    const navigate = useNavigate()
    const [talents, setTalents] = useState<any[]>([])
    useEffect(() => {
        getAllProfiles().then((res) => {
            setTalents(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">

        <Link className="my-4 px-5 inline-block" to="/talents">
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>

        <div className="flex gap-5">
            <Profile />
            <RecommendedTalent talents={talents} />
        </div>
    </div>
}

export default TalentProfilePage