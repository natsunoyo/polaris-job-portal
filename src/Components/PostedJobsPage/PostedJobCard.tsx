import { Link, useParams } from "react-router-dom"
import { timeAgo } from "../../Services/Utilities"

const PostedJobCard = (props: any) => {
    const { id } = useParams()

    return <Link to={`/posted-jobs/${props.id}`}>
        <div className={` rounded-xl p-2 border-l-8 border-l-purple-heart-400 ${props.id == id ? "bg-purple-heart-400 text-woodsmoke-950" : "bg-woodsmoke-900"}`}>
            <div className="text-xl font-semibold">{props.jobTitle}</div>
            <div className={`text-md font-medium ${props.id == id ? 'text-woodsmoke-900' : 'text-silver-sand-400'} `}>{props.location}</div>
            <div className={`text-md ${props.id == id ? 'text-woodsmoke-900' : 'text-silver-sand-400'} `}>{timeAgo(props.postTime)}</div>
        </div>
    </Link >
}

export default PostedJobCard