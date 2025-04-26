const PostedJobCard = (props: any) => {
    return <div className="bg-woodsmoke-900 rounded-xl p-2 border-l-8 border-l-purple-heart-400">
        <div className="text-xl font-semibold">{props.jobTitle}</div>
        <div className="text-md text-silver-sand-400 font-medium">{props.location}</div>
        <div className="text-md text-silver-sand-400">{props.posted}</div>
    </div>
}

export default PostedJobCard