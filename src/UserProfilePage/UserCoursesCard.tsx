import { ActionIcon } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"

const UserCoursesCard = (props: any) => {
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-woodsmoke-800 rounded-md">
                    <img className="h-7" src={`src/assets/companies/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-silver-sand-400">{props.company}</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-md text-silver-sand-400">
                    {props.startDate}- {props.endDate}
                </div>
                {props.edit && <ActionIcon size='xl' variant="subtle" color="red.5">
                    <IconTrash size='xl' />
                </ActionIcon>}
            </div>
        </div>
    </div>
}

export default UserCoursesCard