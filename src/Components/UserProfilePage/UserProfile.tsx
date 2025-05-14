import { Avatar, Divider, FileInput, Overlay } from "@mantine/core"
import { IconEdit } from "@tabler/icons-react"
import { useDispatch, useSelector } from "react-redux"
import Info from "./Info"
import { changeProfile } from "../../Slices/ProfileSlice"
import Bio from "./Bio"
import Skills from "./Skills"
import Education from "./Education"
import Course from "./CourseProfile"
import { useHover } from "@mantine/hooks"
import { successNotification } from "../../Services/NotificationService"


const UserProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile)
    const { hovered, ref } = useHover();
    const handleFileChange = async (image: any) => {
        let picture: any = await getBase64(image)
        let updatedProfile = { ...profile, picture: picture.split(',')[1] }
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", "Аватар успішно оновлений")

    }

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => { resolve(reader.result) }
            reader.onerror = error => { reject(error) }
        })
    }

    return <div className=" pt-5 w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="src/assets/profilePage/banner.jpg" alt="" />

            <div ref={ref} className="absolute flex items-center justify-center -bottom-1/3 left-3">

                <Avatar size="200" className="rounded-full -bottom-1/3  border-woodsmoke-950 border-8" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "avatar.png"} alt="" />

                {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.85} />}
                {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}
                {hovered && <FileInput onChange={handleFileChange} className="absolute z-[301] [&_*]:!rounded-full [&_*]:!h-full h-full w-full" variant="transparent" accept="image/png,image/jpeg" />}

            </div>

        </div>

        <div className="mt-24 px-3">
            {/* Personal info edit */}
            <Info />
        </div>

        {/* Bio edit */}

        <Divider size="xs" mx="md" my="xl" />
        <Bio />


        {/* Skills edit */}

        <Divider size="xs" mx="md" my="xl" />
        <Skills />


        {/* Education edit */}

        <Divider size="xs" mx="md" my="xl" />
        <Education />

        {/* Courses edit */}

        <Divider size="xs" mx="md" my="xl" />
        <Course />

    </div>
}

export default UserProfile