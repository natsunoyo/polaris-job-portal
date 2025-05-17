import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card } from "../../Data/JobDescData"
//@ts-ignore
import DOMPurify from 'dompurify';
import { timeAgo } from "../../Services/Utilities";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const JobDesc = (props: any) => {
    const dispatch = useDispatch()
    const [applied, setApplied] = useState(false)
    const user = useSelector((state: any) => state.user)
    const profile = useSelector((state: any) => state.profile)

    const handleSaveJob = () => {
        let savedJobs: any = [...profile.savedJobs]
        if (savedJobs?.includes(props.id)) {
            savedJobs = savedJobs?.filter((id: any) => id !== props.id)
        } else {
            savedJobs = [...savedJobs, props.id]
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs }
        dispatch(changeProfile(updatedProfile))
    }

    const handleClose = () => {
        postJob({ ...props, jobStatus: "CLOSED" }).then((res) => {
            successNotification("Успіх", "Вакансія успішно закрита")
        }).catch((err) => {
            errorNotification("Виникла помилка", err.response.data.errorMessage)
        })
        // let updatedJob = { ...props, jobStatus: "CLOSED" }
        // dispatch(changeProfile(updatedJob))
    }

    useEffect(() => {
        if (props.applicants?.filter((applicant: any) => applicant.applicantID == user.id).length > 0) {
            setApplied(true)
        } else setApplied(false)
    }, [props])



    const cleanHTML = DOMPurify.sanitize(props.description)
    return <div className="w-2/3 pl-3">
        <div className="flex justify-between">
            <div className="flex gap-2 p-3 items-center">
                <div className="p-3  bg-woodsmoke-800 rounded-xl">
                    <img className="h-14" src={`/icons/${props.company}.svg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/icons/default.png";
                        }}
                        alt="" />
                </div>
                <div>
                    <div className="font-semibold text-3xl">{props.jobTitle}</div>
                    <div className="text-xl text-woodsmoke-400">{props.company} &#x2022; {timeAgo(props.postTime)} &#x2022; {props.applicants ? props.applicants.length : 0} кандидатів</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                {(props.edit || !applied) && <Link to={props.edit ? `/post-job/${props.id}` : `/apply/${props.id}`}>
                    <Button variant="light" size="sm" color="purpleHeart.2">{props.closed ? "Відкрити знову" : props.edit ? "Редагувати" : "Подати заявку"}</Button>
                </Link>
                }

                {!props.edit && applied && <Button variant="light" size="sm" color="green.6">Заявку подано</Button>

                }

                {props.edit && !props.closed
                    ? <Button color="red.5" onClick={handleClose} size="sm" variant="outline">Закрити вакансію</Button>
                    : profile.savedJobs?.includes(props.id)
                        ? <IconBookmarkFilled onClick={handleSaveJob} size={40} className="cursor-pointer text-purple-heart-400" />
                        : <IconBookmark onClick={handleSaveJob} size={40} className="text-silver-sand-400 cursor-pointer hover:text-purple-heart-400" />}
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="flex justify-between pl-3">
            {
                card.map((item: any, index: number) => <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon className="!h-12 !w-12" variant="filled" color="purpleHeart.6" radius="xl" aria-label="Settings">
                        <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                    </ActionIcon>
                    <div className="text-sm text-silver-sand-400">{item.name}</div>
                    <div className="font-semibold">{props ? props[item.id] : "N/A"}
                        {item.id == 'salaryOffered' && <> грн</>}</div>
                </div>)
            }
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div>
            <div className="text-xl font-semibold pl-3 mb-5">Необхідні навички</div>
            <div className="flex flex-wrap gap-3 pl-3">
                {
                    props?.skillsRequired?.map((skill: any, index: number) => <ActionIcon key={index} className="!h-fit !w-fit !font-medium !text-sm"
                        variant="filled" color="purpleHeart.6" p="xs" radius="xl" aria-label="Settings">
                        {skill}
                    </ActionIcon>)
                }
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="[&_*]:!text-silver-sand-300 [&_h4]:!text-xl [&_h4]:!my-5 [&_h4]:!font-semibold [&_h4]:!text-silver-sand-200
        [&_p]:text-justify pl-3 [&_ul]:ml-12 [&_ul]:mb-3 [&_ol]:ml-12 [&_ol]:mb-3 [&_li]:marker:text-purple-heart-600" dangerouslySetInnerHTML={{ __html: cleanHTML }}>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div>
            <div className="text-xl font-semibold pl-3 mb-5">Про компанію</div>

            <div className="flex justify-between mb-3">
                <div className="flex gap-2 p-3 items-center">
                    <div className="p-3  bg-woodsmoke-800 rounded-xl">
                        <img className="h-8" src={`/icons/${props.company}.svg`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "/icons/default.png";
                            }} alt="" />
                    </div>
                    <div>
                        <div className="font-medium text-2xl">{props.company}</div>
                        <div className="text-xl text-woodsmoke-400">10k+ працівників</div>
                    </div>
                </div>
                <Link to={`/company-profile/${props.company}`}>
                    <Button variant="light" size="sm" color="purpleHeart.2">Профіль компанії</Button>
                </Link>
            </div>
            <div className="text-silver-sand-300 pl-3 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ea. Facilis temporibus corporis recusandae, expedita obcaecati ad ex! Nemo, earum?
            </div>
        </div>
    </div>

}

export default JobDesc