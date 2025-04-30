import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import EduCard from "./EduCard"
import CoursesCard from "../UserProfilePage/UserCoursesCard"


const Profile = (props: any) => {
    return <div className="w-2/3 px-5">
        <div className="relative">
            <img className="rounded-t-2xl" src="src/assets/profilePage/banner.jpg" alt="" />
            <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-woodsmoke-950 border-8" src="src/assets/avatars/avatar1.jpg" alt="" />
        </div>

        <div className="mt-24 px-5">
            <div className="text-3xl font-semibold flex justify-between">{props.name} <Button variant="light" color="purpleHeart.2">Написати</Button></div>
            <div className="text-2xl flex gap-1 items-center"> <IconBriefcase className="h-5 w-5" />{props.role}</div>
            <div className="text-lg flex gap-1 items-center text-silver-sand-600">
                <IconMapPin className="h-5 w-5" />{props.city}
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3">Біографія</div>
            <div className="text-lg text-silver-sand-400 text-justify">
                {props.about}
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3 ">Навички</div>
            <div className="flex flex-wrap gap-2">
                {
                    props.techInterests.map((skill: any, index: any) => <div key={index} className="bg-purple-heart-400/30 rounded-3xl font-medium text-purple-heart-500 px-3 py-1">{skill}</div>)
                }
            </div>
        </div>

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5">Освіта</div>
            <div className="flex flex-col gap-8">
                {
                    props.education.map((edu: any, index: any) => <EduCard key={index} {...edu} />)
                }
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5">Курси</div>
            <div className="flex flex-col gap-8">
                {
                    props.courses.map((course: any, index: any) => <CoursesCard key={index} {...course} />)
                }
            </div>
        </div>

    </div>
}

export default Profile