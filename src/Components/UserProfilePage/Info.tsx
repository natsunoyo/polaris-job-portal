import { ActionIcon } from "@mantine/core"
import { IconDeviceFloppy, IconPencil, IconBriefcase, IconMapPin } from "@tabler/icons-react"
import UserSelectInput from "./UserSelectInput"
import fields from "../../Data/ProfileData"
import { useState } from "react"
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationService"

const Info = () => {
    const select = fields;
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    const profile = useSelector((state: any) => state.profile)
    const [edit, setEdit] = useState(false)
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({ jobTitle: profile.jobTitle, eduLevel: profile.eduLevel, location: profile.location })
        } else {
            setEdit(false);
            let updatedProfile = { ...profile, ...form.getValues() }
            dispatch(changeProfile(updatedProfile))
            successNotification("Успіх", "Профіль оновлено успішно.")
            console.log(updatedProfile)
        }

    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', eduLevel: '', location: '' },
    });


    return <>
        <div className="text-3xl font-semibold flex justify-between pt-4 pl-3">
            {user.name}
            <ActionIcon onClick={handleClick} size="xl" variant="subtle" color="purpleHeart.2">
                {edit ? <IconDeviceFloppy size="xl" /> : <IconPencil size="xl" />}
            </ActionIcon>
        </div>
        {
            edit
                ? <>
                    <div className="pr-3 pl-3">
                        <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                            <UserSelectInput form={form} name="jobTitle" {...select[0]} />
                            <UserSelectInput form={form} name="eduLevel" {...select[1]} />
                        </div>
                        <UserSelectInput form={form} name="location" {...select[2]} />
                    </div>
                </>
                : <>
                    <div className="pr-3 pl-3">
                        <div className="text-2xl flex gap-1 items-center">
                            <IconBriefcase className="h-5 w-5" />
                            {profile.jobTitle}
                        </div>
                        <div className="text-lg flex gap-1 items-center text-silver-sand-600">
                            <IconMapPin className="h-5 w-5" />
                            {profile.location}
                        </div>
                    </div>
                </>
        }
    </>
}
export default Info