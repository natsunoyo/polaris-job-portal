import PostedJob from "../Components/PostedJobsPage/PostedJob"
import PostedJobDesc from "../Components/PostedJobsPage/PostedJobDesc"

const PostedJobPage = () => {
    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner'] p-4">
        <div className="flex gap-5">
            <PostedJob />
            <PostedJobDesc />
        </div>
    </div>

}

export default PostedJobPage