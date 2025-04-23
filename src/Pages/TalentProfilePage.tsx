import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Profile from "../TalentProfile/Profile"
import { profileData } from "../Data/TalentsData"
import RecommendedTallent from "../FindTalentsPage/RecommendedTalents"

const TalentProfilePage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">
        <Divider size="xs" mx="md" />
        <Link className="my-4 px-5 inline-block" to="/talents">
            <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>

        <div className="flex gap-5">
            <Profile {...profileData} />
            <RecommendedTallent />
        </div>
    </div>
}

export default TalentProfilePage