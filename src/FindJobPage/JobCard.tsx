import { IconBookmark, IconClock } from "@tabler/icons-react"
import { Divider, Text } from "@mantine/core"

const JobCard = (props: any) => {
    return <div className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_2px_indigo] !shadow-purple-heart-600 cursor-pointer" >
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-800 rounded-md">
                    <img className="w-[48px] h-[48px]" src={`src/assets/icons/${props.company}.svg`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-woodsmoke-400">{props.company} &#x2022; {props.applicants} кандидатів</div>
                </div>
            </div>
            <IconBookmark className="text-silver-sand-400 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-woodsmoke-800 [&>div]:text-purple-heart-400 [&>div]:rounded-lg text-xs items-center">
            <div>{props.jobType}</div>
            <div>{props.education}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-sm text-justify !text-silver-sand-400" lineClamp={3}>
            {props.description}
        </Text>
        <Divider size="xs" color="woodSmoke.5" />
        <div className="flex justify-between">
            <div className="font-semibold">
                &#8372; {props.salary}
            </div>
            <div className="flex gap-1 text-sm items-center text-woodsmoke-500">
                <IconClock className="h-5 w-5" /> {props.postedDaysAgo} днів тому
            </div>
        </div>
    </div>
}
export default JobCard