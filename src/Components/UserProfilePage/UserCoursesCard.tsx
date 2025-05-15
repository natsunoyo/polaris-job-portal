import { ActionIcon } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import { formatDate } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";

const UserCoursesCard = (props: any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);


    const handleDelete = () => {
        let courses = [...profile.courses]
        courses.splice(props.index, 1)
        let updatedProfile = { ...profile, courses: courses }
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Інформація про курси успішно видалена")
    }

    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-woodsmoke-800 rounded-md">
                    <img className="h-7" src={`/assets/companies/${props.company}.png`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.programTitle}</div>
                    <div className="text-sm text-silver-sand-400">{props.company}</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-md text-silver-sand-400 flex flex-col">
                    {formatDate(props.startDate)} - {formatDate(props.endDate)}
                    <div className="text-md text-silver-sand-400">
                        {props.certID}
                    </div>
                </div>

                {props.edit && <ActionIcon onClick={handleDelete} size='xl' variant="subtle" color="red.5">
                    <IconTrash size='xl' />
                </ActionIcon>}
            </div>
        </div>
    </div>
}

export default UserCoursesCard