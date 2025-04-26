import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJobsData";
import SelectInput from "./SelectInput"
import TextEditor from "./RichTextEditor";

const PostJob = () => {
    const select = fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-4xl font-semibold mb-5">Створіть вакансію</div>
        <div className="flex flex-col gap-4">
            <div className=" flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[2]} />
                <SelectInput {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[4]} />
                <SelectInput {...select[5]} />
            </div>

            <TagsInput withAsterisk label="Технічні інтереси" placeholder="Оберіть ті, яким ви хочете навчати майбутніх підлеглих" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />

            <div className="[&_button[data-active='true']]:!text-purple-heart-600 [&_button[data-active='true']]:!bg-purple-heart-600/20">
                <div className="text-md font-medium">Опис вакансії</div>
                <TextEditor />
            </div>
            <div className="flex gap-4">
                <Button variant="light" color="purpleHeart.2">Опублікувати вакансію</Button>
                <Button variant="outline" color="purpleHeart.2">Зберегти чернетку</Button>
            </div>
        </div>
    </div>
}

export default PostJob