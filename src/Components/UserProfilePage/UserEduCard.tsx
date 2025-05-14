import { ActionIcon } from "@mantine/core"
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { formatDate } from "../../Services/Utilities";
import EduEdit from "./EduEdit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const UserEduCard = (props: any) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    const handleDelete = () => {
        let edu = [...profile.educations]
        edu.splice(props.index, 1)
        let updatedProfile = { ...profile, educations: edu }
        setEdit(false)
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Інформація про освіту успішно видалена")
    }
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
        } else setEdit(false);
    }
    return !edit
        ? <div className="flex flex-col gap-2">
            <div className="flex justify-between">

                {!edit ? <> <div className="flex gap-2 items-center">
                    <div className="p-2 bg-woodsmoke-800 rounded-md">
                        <img className="h-7" src={`src/assets/companies/${props.eduInst}.png`} alt="" />
                    </div>

                    <div className="flex flex-col">
                        <div className="font-semibold">{props.eduInst}</div>
                        <div className="text-sm text-silver-sand-400">Спеціальність "{props.speciality}"</div>
                    </div>
                </div>

                    <div className="flex items-center gap-3">
                        <div className="text-md text-silver-sand-400">
                            {formatDate(props.startDate)} - {props.studying ? "до тепер" : formatDate(props.endDate)}
                            <div className="text-md text-silver-sand-400">
                                {props.degree}
                            </div>
                        </div>
                    </div></> : <EduEdit {...props} />}

                <div className="flex items-center gap-3">
                    {props.edit && <div className="flex flex-col gap-3">
                        <ActionIcon size='xl' variant="subtle" color="red.5" onClick={handleDelete}>
                            <IconTrash size='xl' />
                        </ActionIcon>
                        <ActionIcon onClick={handleClick} size='xl' variant="subtle" color="purpleHeart.2">
                            {<IconEdit size='xl' />}
                        </ActionIcon>
                    </div>}
                </div>
            </div>
        </div>
        : <EduEdit  {...props} setEdit={setEdit} />
}

export default UserEduCard