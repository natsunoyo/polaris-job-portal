import { Divider } from "@mantine/core"
import TalentsSearchBar from "../Components/FindTalentsPage/TalentsSearchBar.tsx"
import Talents from "../Components/FindTalentsPage/Talents.tsx"

const FindTalentsPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">
        <TalentsSearchBar />
        <Divider size="xs" mx="md" />
        <Talents />
    </div>
}

export default FindTalentsPage