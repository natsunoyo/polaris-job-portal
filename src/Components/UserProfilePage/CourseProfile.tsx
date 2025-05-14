import { ActionIcon } from "@mantine/core"
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react"
import CoursesEdit from "./CoursesEdit"
import UserCoursesCard from "./UserCoursesCard"
import { useState } from "react"
import { useSelector } from "react-redux"

const Course = () => {
    const [addCourse, setAddCourse] = useState(false);
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile)
    const handleClick = () => {
        setEdit(!edit)
    }

    return <div className="px-5">
        <div className="text-2xl font-semibold mb-5 flex justify-between">Курси <div className="flex gap-3"><ActionIcon onClick={() => setAddCourse(true)}
            size="xl" color="purpleHeart.2" variant="subtle"><IconPlus size="xl" /></ActionIcon>
            <ActionIcon onClick={handleClick} size='xl' variant="subtle" color={edit ? "red.6" : "purpleHeart.2"}>
                {edit ? <IconX size='xl' /> : <IconPencil size='xl' />}</ActionIcon></div></div>
        <div className="flex flex-col gap-8">
            {
                profile?.courses?.map((course: any, index: any) => <UserCoursesCard key={index} index={index} {...course} edit={edit} />)
            }
            {
                addCourse && <CoursesEdit setEdit={setAddCourse} />
            }
        </div>
    </div>
}

export default Course