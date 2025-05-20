import { ActionIcon, TagsInput } from "@mantine/core"
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { successNotification } from "../../Services/NotificationService"
import { changeProfile } from "../../Slices/ProfileSlice"

const Skills = () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const [skills, setSkills] = useState<string[]>([])

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setSkills(profile.skills)
        }
        else setEdit(false);
    }
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, skills: skills }
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Навички оновлені успішно.")
        // console.log(updatedProfile)
    }

    return <div className="px-5">
        <div className="text-2xl font-semibold mb-3 flex justify-between">Навички <div>
            {edit && <ActionIcon onClick={handleSave} size="xl" variant="subtle" color={edit ? "green.6" : "purpleHeart.2"}>
                {<IconCheck size="xl" />}
            </ActionIcon>}
            <ActionIcon onClick={handleClick} size="xl" variant="subtle" color={edit ? "red.6" : "purpleHeart.2"}>
                {edit ? <IconX size="xl" /> : <IconPencil size="xl" />}
            </ActionIcon>
        </div></div>

        {
            edit
                ? <TagsInput
                    value={skills} onChange={setSkills}
                    placeholder="Enter tag"
                    splitChars={[',', ' ', '|']}
                />
                :
                <div className="flex flex-wrap gap-2">
                    {
                        profile?.skills?.map((skill: any, index: number) => <div key={index} className="bg-purple-heart-400/30 rounded-3xl font-medium text-purple-heart-500 px-3 py-1">{skill}</div>)
                    }
                </div>
        }


    </div>


}
export default Skills