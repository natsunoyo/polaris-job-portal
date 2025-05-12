import { ActionIcon, Avatar, Divider, FileInput, Indicator, TagsInput, Textarea } from "@mantine/core"
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react"
import UserEduCard from "./UserEduCard"
import UserCoursesCard from "./UserCoursesCard"
import { useEffect, useState } from "react"
import EduEdit from "./EduEdit"
import CoursesEdit from "./CoursesEdit"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../Services/ProfileService"
import Info from "./Info"
import { setProfile } from "../../Slices/ProfileSlice"


const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    const profile = useSelector((state: any) => state.profile)

    const [edit, setEdit] = useState([false, false, false, false, false,])
    const [bio, setBio] = useState(`Цікавлюсь аналітикою та бізнес-процесами. Шукаю можливість розпочати кар'єру бізнес-аналітика в команді, яка готова ділитись досвідом.`)
    const [skill, setSkill] = useState(["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python",
        "Java", "Ruby", "PHP", "SQL", "MongoDB", "PostgreSQL", "Git",
        "API Development", "Testing and Debugging", "Agile Methodologies",
        "DevOps", "AWS", "Azure", "Google Cloud", "SEO"]);
    const [addEdu, setAddEdu] = useState(false);
    const [addCourses, setAddCourses] = useState(false);
    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(edit)
    }

    useEffect(() => {
        getProfile(user.id).then((data: any) => {
            dispatch(setProfile(data));
        }).catch((error: any) => {
            console.log(error);
        })
    }, [])

    return <div className=" pt-5 w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="src/assets/profilePage/banner.jpg" alt="" />

            <div className="absolute -bottom-1/3 left-3">
                <Indicator className="[&_mantine-Indicator-indicator]:!border-8 [&_img]:hover:opacity-80 " autoContrast inline offset={30} label={<IconPencil className="w-4/5 h-4/5" />} size={45} color="purpleHeart.4" position="bottom-end" withBorder>
                    <Avatar size="200" className="rounded-full -bottom-1/3 absolute left-3 border-woodsmoke-950 border-8" src="src/assets/avatars/avatar1.jpg" alt="" />
                    <FileInput className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent" variant="unstyled" size="lg" radius="xl" accept="image/png,image/jpeg" />
                </Indicator>
            </div>

        </div>

        <div className="mt-24 px-3">
            {/* Personal info edit */}
            <Info />
        </div>

        {/* Bio edit */}

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3 flex justify-between">Біографія <ActionIcon onClick={() => handleEdit(1)} size='xl' variant="subtle" color="purpleHeart.2">
                {edit[1] ? <IconDeviceFloppy size='xl' /> : <IconPencil size='xl' />}
            </ActionIcon></div>
            {
                edit[1]
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


        {/* Skills edit */}

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3 flex justify-between">Навички <ActionIcon onClick={() => handleEdit(2)} size='xl' variant="subtle" color="purpleHeart.2">
                {edit[2] ? <IconDeviceFloppy size='xl' /> : <IconPencil size='xl' />}
            </ActionIcon></div>

            {
                edit[2]
                    ? <TagsInput
                        value={skill} onChange={setSkill}
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


        {/* Education edit */}

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Освіта <div className="flex gap-3"><ActionIcon onClick={() => setAddEdu(true)} size="xl" color="purpleHeart.2" variant="subtle"><IconPlus size="xl" /></ActionIcon>
                <ActionIcon onClick={() => handleEdit(3)} size='xl' variant="subtle" color="purpleHeart.2">
                    {edit[3] ? <IconDeviceFloppy size='xl' /> : <IconPencil size='xl' />}</ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    profile?.educations?.map((edu: any, index: any) => <UserEduCard key={index} {...edu} edit={edit[3]} />)
                }
                {
                    addEdu && <EduEdit setEdit={setAddEdu} />
                }
            </div>
        </div>


        {/* Courses edit */}

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Курси <ActionIcon onClick={() => handleEdit(4)} size='xl' variant="subtle" color="purpleHeart.2">
                {edit[4] ? <IconDeviceFloppy size='xl' /> : <IconPencil size='xl' />}</ActionIcon></div>
            <div className="flex flex-col gap-8">
                {
                    profile?.courses?.map((course: any, index: any) => <UserCoursesCard key={index} {...course} edit={edit[4]} />)
                }
                {
                    addCourses && <CoursesEdit setEdit={setAddCourses} />
                }
            </div>
        </div>

    </div>
}

export default UserProfile