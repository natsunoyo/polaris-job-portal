import { ActionIcon, Textarea } from "@mantine/core"
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";



const Bio = () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const [bio, setBio] = useState("")

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setBio(profile.bio)
        }
        else setEdit(false);
    }
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, bio: bio }
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Профіль оновлено успішно.")
        // console.log(updatedProfile)
    }

    return <div className="px-5">
        <div className="text-2xl font-semibold mb-3 flex justify-between">Біографія <div>
            {edit && <ActionIcon onClick={handleSave} size="xl" variant="subtle" color={edit ? "green.6" : "purpleHeart.2"}>
                {<IconCheck size="xl" />}
            </ActionIcon>}
            <ActionIcon onClick={handleClick} size="xl" variant="subtle" color={edit ? "red.6" : "purpleHeart.2"}>
                {edit ? <IconX size="xl" /> : <IconPencil size="xl" />}
            </ActionIcon>
        </div></div>
        {
            edit
                ? <Textarea
                    autosize
                    size="lg"
                    placeholder="Напишіть про себе та зацікавте роботодавців :)"
                    minRows={3}
                    value={bio}
                    onChange={(event) => setBio(event.currentTarget.value)}
                />
                :
                <div className="text-lg text-silver-sand-400 text-justify">
                    {profile?.bio}
                </div>
        }

    </div>
}

export default Bio