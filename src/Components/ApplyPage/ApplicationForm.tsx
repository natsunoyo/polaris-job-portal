import { TextInput, NumberInput, FileInput, Textarea, Button } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconFileCv } from "@tabler/icons-react";
import { useState } from "react";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { useNavigate, useParams } from "react-router-dom";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const user = useSelector((state: any) => state.user)
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handlePreview = () => {
        form.validate();
        if (!form.isValid()) return;
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleSubmit = async () => {
        setSubmit(true)
        let resume: any = await getBase64(form.getValues().resume);
        let applicant = { ...form.getValues(), applicantID: user.id, resume: resume.split(',')[1] }
        applyJob(id, applicant).then(() => {
            setSubmit(false);
            successNotification("Успіх", "Заявку надіслано успішно. \nОчікуйте відповіді роботодавця.")
            navigate("/job-history")
        }).catch((err) => {
            setSubmit(false);
            errorNotification("Виникла помилка при поданні заявки.", err.response.data.errorMessage)
        })
    }



    const form = useForm({
        validateInputOnChange: true,
        mode: 'controlled',
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            resume: null,
            coverLetter: ''
        },

        validate: {
            name: isNotEmpty("Введіть ПІБ"),
            email: isNotEmpty("Введіть email"),
            phone: isNotEmpty("Введіть номер телефону"),
            resume: isNotEmpty("Поле не може бути пустим"),
        }
    });


    return <div>
        <div className="text-xl font-semibold mb-5">Подати заявку</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`}
                    label="ПІБ" withAsterisk placeholder="Вкажіть свої ПІБ" />
                <TextInput {...form.getInputProps("email")} readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Електронна пошта" withAsterisk placeholder="Вкажіть свою електронну пошту" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput {...form.getInputProps("phone")} readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Номер телефону" hideControls min={0} max={9999999999999} clampBehavior="strict" withAsterisk placeholder="+380681234567" />
                <TextInput {...form.getInputProps("website")} readOnly={preview} variant={preview ? "unstyled" : "default"}
                    className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`} label="Особистий сайт" placeholder="Введіть URL свого сайту" />
            </div>
            <FileInput withAsterisk
                accept="application/pdf"
                {...form.getInputProps("resume")}
                readOnly={preview} variant={preview ? "unstyled" : "default"}
                className={`${preview ? "text-silver-sand-600 font-semibold" : ""}`}
                leftSection={<IconFileCv />}
                label="Attach your CV"
                placeholder="Your CV"
                leftSectionPointerEvents="none"
            />

            <Textarea
                {...form.getInputProps("coverLetter")}
                readOnly={preview} variant={preview ? "unstyled" : "default"}
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
}

export default ApplicationForm