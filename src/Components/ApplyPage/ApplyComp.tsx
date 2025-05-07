import { Button, Divider, FileInput, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconFileCv } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const ApplyComp = () => {

    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5)
    const navigate = useNavigate()
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleSubmit = () => {
        setSubmit(!submit);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) navigate('/jobs')
        }, 1000)


    }

    return <>
        <div className="w-2/3 pl-3 mx-auto">
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
            </div>
            <Divider size="xs" mx="md" my="xl" />
            <div className="text-xl font-semibold mb-5">Подати заявку</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`}
                        label="ПІБ" withAsterisk placeholder="Вкажіть свої ПІБ" />
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Електронна пошта" withAsterisk placeholder="Вкажіть свою електронну пошту" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Номер телефону" hideControls min={0} max={9999999999999} clampBehavior="strict" withAsterisk placeholder="+380681234567" />
                    <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Особистий сайт" placeholder="Введіть URL свого сайту" />
                </div>
                <FileInput withAsterisk
                    readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`}
                    leftSection={<IconFileCv />}
                    label="Attach your CV"
                    placeholder="Your CV"
                    leftSectionPointerEvents="none"
                />

                <Textarea readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} withAsterisk placeholder="Напишиіть про себе..." label="Супровідний лист" autosize minRows={4} />
                {!preview && <Button onClick={handlePreview} variant="light" color="purpleHeart.2">Передивитися свою заявку</Button>}
                {
                    preview && <div className="flex gap-10 [&>*]:w-1/2">
                        <Button fullWidth onClick={handlePreview} disabled={submit} color="purpleHeart.2" variant="outline">Редагувати</Button>
                        <Button fullWidth onClick={handleSubmit} disabled={submit} color="purpleHeart.2" variant="light">Надіслати</Button>
                    </div>
                }
            </div>
        </div>
        <Notification className={`-translate-y-30 !fixed top-0 transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-30"}`} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} color="teal"
            title="Заявка надіслана!" mt="md" withCloseButton={false}>
            <div>Чекайте відповіді роботодавця :)</div>
            Перенаправлення на сторінку з вакансіями через {sec} секунд...
        </Notification >
    </>

}
export default ApplyComp