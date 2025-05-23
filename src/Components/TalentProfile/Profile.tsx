import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconCash, IconMapPin } from "@tabler/icons-react"
import EduCard from "./EduCard"
import CoursesCard from "../UserProfilePage/UserCoursesCard"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProfile } from "../../Services/ProfileService"


const Profile = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState<any>({})
    useEffect(() => {
        window.scrollTo(0, 0)
        getProfile(id).then((res) => {
            setProfile(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    return <div className="w-2/3 px-5">
        <div className="relative">
            <img className="rounded-t-2xl" src="/assets/profilePage/banner.jpg" alt="" />
            <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-woodsmoke-950 border-8" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/avatars/defaultAvatar.jpg"} alt="" />
        </div>

        <div className="mt-24 px-5">
            <div className="text-3xl font-semibold flex justify-between">{profile?.name} <Button variant="light" color="purpleHeart.2">Написати</Button></div>
            <div className="text-xl flex gap-1 items-center"> <IconBriefcase className="h-5 w-5" />{profile?.jobTitle}</div>
            <div className="text-xl flex gap-1 items-center text-silver-sand-600">
                <IconMapPin className="h-5 w-5" />{profile?.location}
            </div>
            <div className="text-xl flex gap-1 items-center text-silver-sand-600">
                <IconCash className="h-5 w-5" />
                Бажана заробітна плата: {profile.expectedSalary} грн
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3">Біографія</div>
            <div className="text-lg text-silver-sand-400 text-justify">
                {profile?.bio}
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-3 ">Навички</div>
            <div className="flex flex-wrap gap-2">
                {
                    profile?.skills?.map((skill: any, index: any) => <div key={index} className="bg-purple-heart-400/30 rounded-3xl font-medium text-purple-heart-500 px-3 py-1">{skill}</div>)
                }
            </div>
        </div>

        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5">Освіта</div>
            <div className="flex flex-col gap-8">
                {
                    profile?.educations?.map((edu: any, index: any) => <EduCard key={index} {...edu} />)
                }
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="px-5">
            <div className="text-2xl font-semibold mb-5">Курси</div>
            <div className="flex flex-col gap-8">
                {
                    profile?.courses?.map((course: any, index: any) => <CoursesCard key={index} {...course} />)
                }
            </div>
        </div>

    </div>
}

export default Profile