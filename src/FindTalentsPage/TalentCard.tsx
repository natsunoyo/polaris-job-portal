import { IconBookmark, IconCalendarMonth, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { DateInput, TimeInput } from '@mantine/dates';


import { Link } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null)
    return <div className="bg-woodsmoke-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_2px_indigo] !shadow-purple-heart-600 cursor-pointer" >
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2  bg-woodsmoke-800 rounded-md">
                    <Avatar className="w-[48px] h-[48px]" size="lg" src={`src/assets/avatars/${props.image}.jpg`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-woodsmoke-400">{props.role}</div>
                </div>
            </div>
            <IconBookmark className="text-silver-sand-400 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-woodsmoke-800 [&>div]:text-purple-heart-400 [&>div]:rounded-lg text-xs items-center">
            <div>{props.techInterests[0]}</div>
            <div>{props.techInterests[1]}</div>
            <div>{props.techInterests[2]}</div>
        </div>
        <Text className="!text-sm text-justify !text-silver-sand-400" lineClamp={3}>
            {props.about}
        </Text>
        <Divider size="xs" color="woodSmoke.5" />
        {
            props.invited ? <div className="flex gap-2 text-silver-sand-400 text-md items-center">
                <IconCalendarMonth /> Співбесіда запланована на травень 12, 2025, 12:00
            </div> : <div className="flex justify-between">
                <div className="font-semibold">
                    &#8372; {props.salary}
                </div>
                <div className="flex gap-1 text-sm items-center text-woodsmoke-500">
                    <IconMapPin className="h-5 w-5" /> {props.city}
                </div>
            </div>
        }

        <Divider size="xs" color="woodSmoke.5" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {
                !props.invited && <>
                    <Link to="/talent-profile">
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
                        <Button fullWidth variant="outline" color="purpleHeart.2">Прийняти</Button>
                    </div>
                    <div>
                        <Button fullWidth variant="light" color="red.4">Відхилити</Button>
                    </div>
                </>
            }

        </div>
        <Modal opened={opened} onClose={close} title="Запланувати співбесіду" centered>
            <div className="flex flex-col gap-4">
                <DateInput value={value} minDate={new Date()} locale="uk" onChange={setValue} label="Дата" placeholder="Введіть дату" />
                <TimeInput label="Час" ref={ref} onClick={() => ref.current?.showPicker()} />
                <Button fullWidth variant="light" color="purpleHeart.2">Запланувати співбесіду</Button>
            </div>
        </Modal>
    </div >
}
export default TalentCard