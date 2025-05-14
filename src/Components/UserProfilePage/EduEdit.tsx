import { Button, Checkbox, TextInput } from "@mantine/core";
import UserSelectInput from "./UserSelectInput";
import fields from "../../Data/ProfileData";
import { MonthPickerInput } from "@mantine/dates";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";


const EduEdit = (props: any) => {
    const select = fields;
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);

    useEffect(() => {
        if (!props.add) {
            form.setValues({
                eduInst: props.eduInst,
                speciality: props.speciality,
                degree: props.degree,
                startDate: new Date(props.startDate),
                endDate: new Date(props.endDate),
                studying: props.studying,
            })
        }
    }, [])

    const form = useForm({
        validateInputOnChange: true,
        mode: 'controlled',
        initialValues: {
            eduInst: '',
            speciality: '',
            degree: '',
            startDate: new Date(),
            endDate: new Date(),
            studying: false
        },

        validate: {
            eduInst: isNotEmpty("Введіть назву навчальної установи"),
        }
    });

    const handleSave = () => {
        form.validate()
        if (!form.isValid()) return
        let edu = [...profile.educations]
        if (props.add) {
            edu.push(form.getValues())
            edu[edu.length - 1].startDate = edu[edu.length - 1].startDate.toISOString()
            edu[edu.length - 1].endDate = edu[edu.length - 1].endDate.toISOString()
        }
        else {
            edu[props.index] = form.getValues()
            edu[props.index].startDate = edu[props.index].startDate.toISOString()
            edu[props.index].endDate = edu[props.index].endDate.toISOString()
        }

        let updatedProfile = { ...profile, educations: edu }
        props.setEdit(false)
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", `Інформація про освіту ${props.add ? "оновлена" : "додана"} успішно.`)
        console.log(updatedProfile)
    }

    return <>
        <div className="flex flex-col gap-3">
            <div className=" text-lg pl-3">Редагувати інформацію про освіту</div>
            <div className="pr-3 pl-3">
                <div className="flex gap-10 [&>*]:w-full mb-3">
                    <TextInput {...form.getInputProps('eduInst')}
                        size="lg" label="Назва навчального закладу" withAsterisk placeholder="Введіть назву вашої навчальної установи" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                    <TextInput {...form.getInputProps('speciality')}
                        size="lg" label="Спеціальність" withAsterisk placeholder="Введіть назву вашої спеціальності" />
                    <UserSelectInput size="lg" placeholder="Введіть ваш ступінь освіти" form={form} name="degree" {...select[4]} />
                </div >
                <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                    <MonthPickerInput {...form.getInputProps("startDate")} size="lg" withAsterisk maxDate={form.getValues().endDate || undefined} label="Початок" placeholder="Виберіть дату" />
                    <MonthPickerInput {...form.getInputProps("endDate")} size="lg" disabled={form.getValues().studying} withAsterisk minDate={form.getValues().startDate || undefined} maxDate={new Date()} label="Кінець" placeholder="Виберіть дату" />
                </div>
                <Checkbox checked={form.getValues().studying} onChange={(event) => form.setFieldValue("studying", event.currentTarget.checked)} className="mb-3" size="lg"
                    autoContrast label="Досі навчаюся" />

                <div className="flex gap-5">
                    <Button color="purpleHeart.2" variant="outline" onClick={handleSave}>Зберегти</Button>
                    <Button onClick={() => props.setEdit(false)} color="red.5" variant="light">Скасувати</Button>
                </div>
            </div>
        </div>
    </>
}

export default EduEdit