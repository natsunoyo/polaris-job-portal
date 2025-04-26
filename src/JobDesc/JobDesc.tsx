import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../Data/JobDescData"
//@ts-ignore
import DOMPurify from 'dompurify';

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc)
    return <div className="w-2/3 pl-3">
        <div className="flex justify-between">
            <div className="flex gap-2 p-3 items-center">
                <div className="p-3  bg-woodsmoke-800 rounded-xl">
                    <img className="h-14" src={`src/assets/icons/Microsoft.svg`} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-3xl">Backend developer</div>
                    <div className="text-xl text-woodsmoke-400">Microsoft &#x2022; 3 days ago &#x2022; 40 кандидатів</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply">
                    <Button variant="light" size="sm" color="purpleHeart.2">Подати заявку</Button>
                </Link>
                <IconBookmark className="text-purple-heart-200 cursor-pointer" />
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
                    <div className="font-semibold">{item.value}</div>
                </div>)
            }
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div>
            <div className="text-xl font-semibold pl-3 mb-5">Необхідні навички</div>
            <div className="flex flex-wrap gap-3 pl-3">
                {
                    skills.map((skill: any, index: number) => <ActionIcon key={index} className="!h-fit !w-fit !font-medium !text-sm"
                        variant="filled" color="purpleHeart.6" p="xs" radius="xl" aria-label="Settings">
                        {skill}
                    </ActionIcon>)
                }
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div className="[&_*]:!text-silver-sand-300 [&_h4]:!text-xl [&_h4]:!my-5 [&_h4]:!font-semibold [&_h4]:!text-silver-sand-200
        [&_p]:text-justify pl-3 [&_ul]:ml-12 [&_ul]:mb-3 [&_ol]:ml-12 [&_ol]:mb-3 [&_li]:marker:text-purple-heart-600" dangerouslySetInnerHTML={{ __html: data }}>
        </div>
        <Divider size="xs" mx="md" my="xl" />
        <div>
            <div className="text-xl font-semibold pl-3 mb-5">Про компанію</div>

            <div className="flex justify-between mb-3">
                <div className="flex gap-2 p-3 items-center">
                    <div className="p-3  bg-woodsmoke-800 rounded-xl">
                        <img className="h-8" src={`src/assets/icons/Microsoft.svg`} alt="" />
                    </div>
                    <div>
                        <div className="font-medium text-2xl">Microsoft</div>
                        <div className="text-xl text-woodsmoke-400">10k+ працівників</div>
                    </div>
                </div>
                <Link to="/company-profile">
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