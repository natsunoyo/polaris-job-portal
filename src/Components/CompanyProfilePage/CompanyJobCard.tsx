import { ActionIcon } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

const CompanyJobCard = (props: any) => {
    return <div className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl mb-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-700 rounded-md">
                    <img className="w-[48px] h-[48px]" src={`/assets/icons/${props.name}.svg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-xl">{props.name}</div>
                    <div className="text-sm text-woodsmoke-400">{props.employees} працівників</div>
                </div>
            </div>
            <ActionIcon color='purpleHeart.4' variant="subtle" >
                <IconExternalLink />
            </ActionIcon>

        </div>
    </div>
}

export default CompanyJobCard