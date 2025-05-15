import { IconBookmark, IconBookmarkFilled, IconClock } from "@tabler/icons-react"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import { timeAgo } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"

const JobCard = (props: any) => {
    const dispatch = useDispatch()
    const profile = useSelector((state: any) => state.profile)
    const handleSaveJob = () => {
        let savedJobs: any = [...profile.savedJobs]
        if (savedJobs?.includes(props.id)) {
            savedJobs = savedJobs?.filter((id: any) => id !== props.id)
        } else {
            savedJobs = [...savedJobs, props.id]
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs }
        dispatch(changeProfile(updatedProfile))
    }

    return <div className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_2px_indigo] !shadow-purple-heart-600 cursor-pointer" >
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-800 rounded-md">
                    <img className="w-[48px] h-[48px]" src={`/icons/${props.company}.svg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-woodsmoke-400">{props.company} &#x2022; {props.applicants ? props.applicants.length : 0} кандидатів</div>
                </div>
            </div>
            {profile.savedJobs?.includes(props.id)
                ? <IconBookmarkFilled onClick={handleSaveJob} size={40} className="cursor-pointer text-purple-heart-400" />
                : <IconBookmark onClick={handleSaveJob} size={40} className="text-silver-sand-400 cursor-pointer hover:text-purple-heart-400" />}
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-woodsmoke-800 [&>div]:text-purple-heart-400 [&>div]:rounded-lg text-xs items-center">
            <div>{props.jobType}</div>
            <div>{props.eduLevelRequired}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-sm text-justify !text-silver-sand-400" lineClamp={3}>
            {props.brief}
        </Text>
        <Divider size="xs" color="woodSmoke.5" />
        <div className="flex justify-between">
            <div className="font-semibold">
                &#8372; {props.salaryOffered}
            </div>
            <div className="flex gap-1 text-sm items-center text-woodsmoke-500">
                <IconClock className="h-5 w-5" /> {timeAgo(props.postTime)}
            </div>
        </div>
        <Link to={`/job-description/${props.id}`} >
            <Button fullWidth color="purpleHeart.2" variant="outline">Переглянути</Button>
        </Link>
    </div>
}
export default JobCard