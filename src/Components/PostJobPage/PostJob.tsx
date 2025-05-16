import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJobsData";
import SelectInput from "./SelectInput"
import TextEditor from "./RichTextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostJob = () => {
    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate()
    const select = fields;
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            jobTitle: '',
            company: '',
            eduLevelRequired: '',
            location: '',
            jobType: '',
            salaryOffered: '',
            skillsRequired: [],
            brief: '',
            description: content
        },
        validate: {
            jobTitle: isNotEmpty('Необхідно вказати назву посади'),
            company: isNotEmpty('Необхідно вказати назву своєї компанії'),
            eduLevelRequired: isNotEmpty('Необхідно вказати бажаний рівень освіти кандидата'),
            location: isNotEmpty('Необхідно вказати місце роботи'),
            jobType: isNotEmpty('Необхідно вказати тип зайнятості'),
            salaryOffered: isNotEmpty('Необхідно вказати заплатню'),
            skillsRequired: isNotEmpty('Введіть хоча б одну необхідну навичку'),
            brief: isNotEmpty('Введіть ціль вакансії'),
            description: isNotEmpty('Введіть опис посади'),
        },
    })

    const handlePost = () => {
        form.validate()
        if (!form.isValid()) return
        postJob({ ...form.getValues(), postedBy: user.id, jobStatus: "ACTIVE" }).then((response) => {
            successNotification("Успіх", "Вакансія успішно опублікована")
            navigate(`/posted-jobs/${response.id}`)

        }).catch((err) => {
            errorNotification("Виникла помилка при публікації вакансії", err.response.data.errorMessage)
            console.log(err)
        })
    }

    const handleDraft = () => {
        form.validate()
        if (!form.isValid()) return
        postJob({ ...form.getValues(), postedBy: user.id, jobStatus: "DRAFT" }).then((response) => {
            successNotification("Успіх", "Чернетку успішно збережено")
            navigate(`/posted-jobs/${response.id}`)

        }).catch((err) => {
            errorNotification("Виникла помилка при публікації вакансії", err.response.data.errorMessage)
            console.log(err)
        })
    }

    return <div className="w-4/5 mx-auto">
        <div className="text-4xl font-semibold mb-5">Створіть вакансію</div>
        <div className="flex flex-col gap-4">
            <div className=" flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name='jobTitle' {...select[0]} />
                <SelectInput form={form} name='company' {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name='eduLevelRequired' {...select[2]} />
                <SelectInput form={form} name='jobType' {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name='location' {...select[4]} />
                <NumberInput {...form.getInputProps('salaryOffered')} label="Зарплата" withAsterisk min={1} max={80000} placeholder="Введіть рівень заплати для цієї посади " clampBehavior="strict" hideControls />
            </div>

            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Навички" placeholder="Оберіть ті, яким ви хочете навчати майбутніх підлеглих" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />
            <Textarea {...form.getInputProps('brief')} withAsterisk className="my-3" label="Ціль вакансії" autosize minRows={3} placeholder="Введіть мету вакансії" />
            <div className="[&_button[data-active='true']]:!text-purple-heart-600 [&_button[data-active='true']]:!bg-purple-heart-600/20">
                <div className="text-md font-medium">Опис вакансії</div>
                <TextEditor form={form} name='description' />
            </div>
            <div className="flex gap-4">
                <Button onClick={handlePost} variant="light" color="purpleHeart.2">Опублікувати вакансію</Button>
                <Button onClick={handleDraft} variant="outline" color="purpleHeart.2">Зберегти чернетку</Button>
            </div>
        </div>
    </div>
}

export default PostJob