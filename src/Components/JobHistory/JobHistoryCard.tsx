import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClock } from "@tabler/icons-react"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"

const JobHistoryCard = (props: any) => {
    return <Link to={"/job-description"} className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_2px_indigo] !shadow-purple-heart-600 cursor-pointer" >
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-800 rounded-md">
                    <img className="w-[48px] h-[48px]" src={`/assets/icons/${props.company}.svg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-woodsmoke-400">{props.company} &#x2022; {props.applicants} кандидатів</div>
                </div>
            </div>
            {props.saved ? <IconBookmarkFilled className="text-purple-heart-400 cursor-pointer" /> : <IconBookmark className="text-silver-sand-400 cursor-pointer" />}
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
                <IconClock className="h-5 w-5" /> {props.applied || props.interviewing ? "Заявка подана " : props.offered ? "Співбесіда пройдена " : "Опубліковано "}{props.postedDaysAgo} днів тому
            </div>
        </div>

        {
            props.offered && <div className="flex gap-2 mt-1">
                <Button fullWidth variant="light" color="purpleHeart.2">Прийняти</Button>
                <Button fullWidth variant="outline" color="red.5">Відхилити</Button>
            </div>
        }

        {
            props.interviewing && <div className="flex gap-2 text-silver-sand-400 text-md items-center">
                <IconCalendarMonth className="text-purple-heart-400" /> Пн, травень 12  &bull; <span className="text-silver-sand-600">12:00</span></div>
        }
    </Link>
}
export default JobHistoryCard