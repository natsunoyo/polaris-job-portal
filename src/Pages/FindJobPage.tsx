import { Divider } from "@mantine/core"
import SearchBar from "../FindJobPage/SearchBar"
import Jobs from "../FindJobPage/Jobs"

const FindJobPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">
        <Divider size="xs" mx="md" />
        <SearchBar />
        <Divider size="xs" mx="md" />
        <Jobs />
    </div>
}

export default FindJobPage