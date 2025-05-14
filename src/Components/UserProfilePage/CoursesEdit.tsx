import { TextInput, Button } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
const CoursesEdit = (props: any) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const profile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();


    const form = useForm({
        validateInputOnChange: true,
        mode: 'controlled',
        initialValues: {
            programTitle: '',
            company: '',
            startDate: new Date(),
            endDate: new Date(),
            certID: ''
        },

        validate: {
            programTitle: isNotEmpty("Введіть назву курсу"),
            company: isNotEmpty("Введіть назву компанії"),
            certID: isNotEmpty("Введіть код сертифікату"),
        }
    });

    const handleSave = () => {
        form.validate()
        if (!form.isValid()) return
        let course = [...profile.courses]
        course.push(form.getValues())
        course[course.length - 1].startDate = course[course.length - 1].startDate.toISOString()
        course[course.length - 1].endDate = course[course.length - 1].endDate.toISOString()
        let updatedProfile = { ...profile, courses: course }
        props.setEdit(false)
        dispatch(changeProfile(updatedProfile))
        successNotification("Успіх", `Інформація про курси оновлена успішно.`)
        console.log(updatedProfile)
    }


    return <div className="flex flex-col gap-3">
        <div className=" text-lg pl-3">Додати інформацію про курси</div>
        <div className="pr-3 pl-3">
            <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                <TextInput {...form.getInputProps("programTitle")} withAsterisk size="lg" label="Назва курсу" placeholder="Введіть назву курсу" />
                <TextInput {...form.getInputProps("company")} withAsterisk size="lg" label="Назва компанії" placeholder="Введіть назву компанії, що проводила курс" />
            </div >
            <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                <MonthPickerInput {...form.getInputProps("startDate")} size="lg" withAsterisk maxDate={endDate || undefined} label="Початок" placeholder="ВИберіть дату" value={startDate} onChange={setStartDate} />
                <MonthPickerInput {...form.getInputProps("endDate")} size="lg" withAsterisk minDate={startDate || undefined} maxDate={new Date()} label="Кінець" placeholder="Виберіть дату" value={endDate} onChange={setEndDate} />
            </div>
            <div className="flex gap-10 mb-3 [&>*]:w-full">
                <TextInput {...form.getInputProps("certID")} withAsterisk size="lg" label="ID сертифікату" placeholder="Введіть ідентифікаційний номер сертифікату" />
            </div >

            <div className="flex gap-5">
                <Button onClick={handleSave} color="purpleHeart.2" variant="outline">Зберегти</Button>
                <Button onClick={() => props.setEdit(false)} color="red.5" variant="light">Скасувати</Button>
            </div>
        </div>
    </div>
}
export default CoursesEdit