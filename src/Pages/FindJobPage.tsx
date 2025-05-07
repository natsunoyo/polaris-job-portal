import { Divider } from "@mantine/core"
import SearchBar from "../Components/FindJobPage/SearchBar"
import Jobs from "../Components/FindJobPage/Jobs"

const FindJobPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">
        <SearchBar />
        <Divider size="xs" mx="md" />
        <Jobs />
    </div>
}

export default FindJobPage