import { IconBookmark, IconCalendarMonth, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { DateInput, TimeInput } from '@mantine/dates';


import { Link, useParams } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"
import { useEffect, useRef, useState } from "react";
import { getProfile } from "../../Services/ProfileService";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { formatInterviewTime, openBase64PDF } from "../../Services/Utilities";

const TalentCard = (props: any) => {
    const { id } = useParams()
    const [opened, { open, close }] = useDisclosure(false)
    const [date, setDate] = useState<Date | null>(null);
    const [profile, setProfile] = useState<any>({})
    const [time, setTime] = useState<any>(null);
    const [app, { open: openApp, close: closeApp }] = useDisclosure(false)

    useEffect(() => {
        if (props.applicantID) getProfile(props.applicantID).then((res) => {
            setProfile(res)
        }).catch((err) => {
            console.log(err)
        })
        else setProfile(props)
    }, [props])

    const handleOffer = (status: string) => {
        let interview: any = { id, applicantID: profile?.id, applicationStatus: status }
        if (status == "INTERVIEWING") {
            const [hours, minutes] = time.split(":").map(Number)
            date?.setHours(hours, minutes)
            interview = { ...interview, interviewTime: date }
        }

        changeAppStatus(interview).then((res) => {
            if (status == "INTERVIEWING") successNotification("Співбесіда запланована успішно", "Ви запросили кандидата на співбесіду")
            else if (status == "OFFERED") successNotification("Пропозиція надіслана успішно", "Ви запропонували кандидату зайняти вакантну посаду")
            else successNotification("Заявка відхилена", "Ви відхилили заявку кандидата")

            window.location.reload()
        }).catch((err) => {
            console.log(err)
            errorNotification("Виникла помилка в процесі планування співбесіди", err.response.data.errorMessage)
        })
        // close()
    }

    const ref = useRef<HTMLInputElement>(null)
    return <div className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_2px_indigo] !shadow-purple-heart-600 cursor-pointer" >
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-800 rounded-md">
                    <Avatar className="w-[48px] h-[48px]" size="lg" src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}` : "/avatars/defaultAvatar.jpg"} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-woodsmoke-400">{profile?.jobTitle}</div>
                </div>
            </div>
            <IconBookmark className="text-silver-sand-400 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-woodsmoke-800 [&>div]:text-purple-heart-400 [&>div]:rounded-lg text-xs items-center">
            {profile?.skills?.map((skill: any, index: any) => index < 4 && <div key={index}>
                {skill}
            </div>)}
        </div>
        <Text className="!text-sm text-justify !text-silver-sand-400" lineClamp={3}>
            {profile?.bio}
        </Text>
        <Divider size="xs" color="woodSmoke.5" />
        {
            props.invited ? <div className="flex gap-2 text-silver-sand-400 text-md items-center">
                <IconCalendarMonth /> Співбесіда запланована на {formatInterviewTime(props.interviewTime)}
            </div> : <div className="flex justify-between">
                <div className="font-semibold">
                    &#8372; {props.expectedSalary ? props.expectedSalary : 0}
                </div>
                <div className="flex gap-1 text-sm items-center text-woodsmoke-500">
                    <IconMapPin className="h-5 w-5" /> {profile?.location}
                </div>
            </div>
        }

        <Divider size="xs" color="woodSmoke.5" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {
                !props.invited && <>
                    <Link to={`/talent-profile/${profile?.id}`}>
                        <Button fullWidth variant="outline" color="purpleHeart.2">Профіль</Button>
                    </Link>

                    <div>
                        {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth />} fullWidth variant="light" color="purpleHeart.2">Запросити</Button>
                            : <Button fullWidth variant="light" color="purpleHeart.2">Написати</Button>}
                    </div>
                </>
            }

            {
                props.invited && <>
                    <div>
                        <Button onClick={() => handleOffer("OFFERED")} fullWidth variant="outline" color="green.4">Прийняти</Button>
                    </div>
                    <div>
                        <Button onClick={() => handleOffer("REJECTED")} fullWidth variant="light" color="red.4">Відхилити</Button>
                    </div>
                </>
            }

        </div>

        {(props.invited || props.posted) && <Button onClick={openApp} fullWidth variant="light" color="purpleHeart.4">Переглянути заявку</Button>}

        <Modal opened={opened} onClose={close} title="Запланувати співбесіду" centered>
            <div className="flex flex-col gap-4">
                <DateInput value={date} minDate={new Date()} locale="uk" onChange={setDate} label="Дата" placeholder="Введіть дату" />
                <TimeInput label="Час" value={time} onChange={(event) => setTime(event.currentTarget.value)} ref={ref} onClick={() => ref.current?.showPicker()} />
                <Button onClick={() => handleOffer("INTERVIEWING")} fullWidth variant="light" color="purpleHeart.2">Запланувати співбесіду</Button>
            </div>
        </Modal>

        <Modal opened={app} onClose={closeApp} title="Заявка кандидата" centered>
            <div className="flex flex-col gap-4">
                <div>
                    Email: &emsp; <a className="text-purple-heart-400 hover:underline cursor-pointer text-center"
                        href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                <div>
                    Вебсайт: &emsp; <a target="_blank" className="text-purple-heart-400 hover:underline cursor-pointer text-center"
                        href={props.website}>{props.website}</a>
                </div>
                <div>
                    Резюме: &emsp; <span className="text-purple-heart-400 hover:underline cursor-pointer text-center"
                        onClick={() => openBase64PDF(props.resume)}>{props.name}</span>
                </div>
                <div>
                    Супровідний лист: &emsp; <div>{props.coverLetter}</div>
                </div>
            </div>
        </Modal>
    </div >
}
export default TalentCard