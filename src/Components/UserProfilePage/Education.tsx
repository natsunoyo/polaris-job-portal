import { ActionIcon } from "@mantine/core"
import { IconPlus, IconPencil, IconX } from "@tabler/icons-react"
import EduEdit from "./EduEdit"
import UserEduCard from "./UserEduCard"
import { useState } from "react"
import { useSelector } from "react-redux"

const Education = () => {
    const [edit, setEdit] = useState(false);
    const [editEdu, setEditEdu] = useState(false)
    const profile = useSelector((state: any) => state.profile)

    const handleClick = () => {
        setEdit(!edit);
    }
    return <div className="px-5">
        <div className="text-2xl font-semibold mb-5 flex justify-between">Освіта <div className="flex gap-3"><ActionIcon onClick={() => setEditEdu(true)}
            size="xl" color="purpleHeart.2" variant="subtle"><IconPlus size="xl" /></ActionIcon>
            <ActionIcon onClick={handleClick} size='xl' variant="subtle" color={edit ? "red.6" : "purpleHeart.2"}>
                {edit ? <IconX size='xl' /> : <IconPencil size='xl' />}</ActionIcon></div></div>
        <div className="flex flex-col gap-8">
            {
                profile?.educations?.map((edu: any, index: any) => <UserEduCard key={index} index={index} {...edu} edit={edit} />)
            }
            {
                editEdu && <EduEdit add setEdit={setEditEdu} />
            }
        </div>
    </div>
}
export default Education