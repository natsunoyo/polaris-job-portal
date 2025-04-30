import { Button, Checkbox, TextInput } from "@mantine/core";
import UserSelectInput from "./UserSelectInput";
import fields from "../Data/ProfileData";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";


const EduEdit = (props: any) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false)
    const select = fields;
    return <div className="flex flex-col gap-3">
        <div className=" text-lg pl-3">Додати інформацію про освіту</div>
        <div className="pr-3 pl-3">
            <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                <TextInput size="lg" label="Назва навчального закладу" withAsterisk placeholder="Введіть назву вашої навчальної установи" />
                <UserSelectInput size="lg" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                <TextInput size="lg" label="Спеціальність" withAsterisk placeholder="Введіть назву вашої спеціальності" />
                <TextInput size="lg" label="Ступінь освіти (для ВНЗ)" placeholder="Введіть ваш ступінь освіти" />
            </div >
            <div className="flex gap-10 [&>*]:w-1/2 mb-3">
                <MonthPickerInput size="lg" withAsterisk maxDate={endDate || undefined} label="Початок" placeholder="ВИберіть дату" value={startDate} onChange={setStartDate} />
                <MonthPickerInput size="lg" disabled={checked} withAsterisk minDate={startDate || undefined} maxDate={new Date()} label="Кінець" placeholder="Виберіть дату" value={endDate} onChange={setEndDate} />
            </div>
            <Checkbox className="mb-3" size="lg" checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                autoContrast label="Досі навчаюся" />

            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} color="purpleHeart.2" variant="outline">Зберегти</Button>
                <Button onClick={() => props.setEdit(false)} color="red.5" variant="light">Скасувати</Button>
            </div>
        </div>
    </div>
}
export default EduEdit