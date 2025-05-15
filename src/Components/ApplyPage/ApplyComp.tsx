import { Divider } from "@mantine/core"

import { timeAgo } from "../../Services/Utilities";
import ApplicationForm from "./ApplicationForm";

const ApplyComp = (props: any) => {


    return <div className="w-2/3 pl-3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 p-3 items-center">
                <div className="p-3  bg-woodsmoke-800 rounded-xl">
                    <img className="h-14" src={`/icons/${props.company}.svg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-3xl">{props.jobTitle}</div>
                    <div className="text-xl text-woodsmoke-400">{props.company} &#x2022; {timeAgo(props.postTime)} &#x2022; {props.applicants ? props.applicants.length : 0} кандидатів</div>
                </div>
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <ApplicationForm />
    </div>

}
export default ApplyComp