import { ActionIcon, NumberInput } from "@mantine/core"
import { IconPencil, IconBriefcase, IconMapPin, IconCheck, IconX, IconCash } from "@tabler/icons-react"
import UserSelectInput from "./UserSelectInput"
import fields from "../../Data/ProfileData"
import { useState } from "react"
import { isNotEmpty, useForm } from '@mantine/form';
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
            form.setValues({
                jobTitle: profile.jobTitle,
                eduLevel: profile.eduLevel,
                location: profile.location,
                expectedSalary: profile.expectedSalary
            })
        } else setEdit(false);
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            jobTitle: '',
            eduLevel: '',
            location: '',
            expectedSalary: 8000
        },
        validate: {
            jobTitle: isNotEmpty("Введіть бажану посаду"),
            eduLevel: isNotEmpty("Введіть найвищий рівень освіти"),
            location: isNotEmpty("Введіть місце проживання/бажане місце роботи"),
        }
    });
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, ...form.getValues() }
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Профіль оновлено успішно.")
        // console.log(updatedProfile)
    }


    return <>
        <div className="text-4xl font-semibold flex justify-between pt-4 pl-3">
            {user.name} <div>
                {edit && <ActionIcon onClick={handleSave} size="xl" variant="subtle" color={edit ? "green.6" : "purpleHeart.2"}>
                    {<IconCheck size="xl" />}
                </ActionIcon>}
                <ActionIcon onClick={handleClick} size="xl" variant="subtle" color={edit ? "red.6" : "purpleHeart.2"}>
                    {edit ? <IconX size="xl" /> : <IconPencil size="xl" />}
                </ActionIcon>
            </div>
        </div>
        {
            edit
                ? <>
                    <div className="pr-3 pl-3">
                        <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                            <UserSelectInput form={form} name="jobTitle" {...select[0]} />
                            <UserSelectInput form={form} name="eduLevel" {...select[1]} />
                        </div>
                        <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                            <UserSelectInput form={form} name="location" {...select[2]} />
                            <NumberInput hideControls clampBehavior="strict" min={1} max={80000} withAsterisk size="lg" label="Бажана зарплата" {...form.getInputProps('expectedSalary')} />
                        </div>
                    </div>
                </>
                : <>
                    <div className="pr-3 pl-3 flex flex-col gap-1">
                        <div className="text-3xl flex gap-2 items-center">
                            <IconBriefcase className="h-5 w-5" />
                            {profile.jobTitle}
                        </div>
                        <div className="text-xl flex gap-2 items-center text-silver-sand-600">
                            <IconMapPin className="h-5 w-5" />
                            {profile.location}
                        </div>
                        <div className="text-xl flex gap-2 items-center text-silver-sand-600">
                            <IconCash className="h-5 w-5" />
                            Бажана заробітна плата: {profile.expectedSalary} грн
                        </div>
                    </div>
                </>
        }
    </>
}
export default Info