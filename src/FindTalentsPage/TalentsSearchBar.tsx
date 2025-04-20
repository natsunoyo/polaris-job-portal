import { Input, RangeSlider } from "@mantine/core"
import { useState } from "react"
import MultiInput from "../FindJobPage/MultiInput";
import { searchFields } from "../Data/TalentsData";
import { IconUserCircle } from "@tabler/icons-react";

const TalentsSearchBar = () => {
    const [value, setValue] = useState<[number, number]>([8000, 80000]);
    return <div className="flex gap-8 px-5 py-8 items-center !text-woodsmoke-200">

        <div className="flex items-center ">
            <Input leftSection={
                <div className='text-purple-heart-400 p-1 bg-woodsmoke-900 rounded-full mr-1 '><IconUserCircle /></div>
            } className="bg-woodsmoke-900 rounded-full cursor-pointer items-center" variant="unstyled" size="md" placeholder="Кандидат" />
        </div>



        {
            searchFields.map((item, index) => <div key={index} className="w-1/4">
                <MultiInput {...item} />
            </div>
            )
        }


        <div className="w-1/4 [&_.mantine-Slider-label]:!translate-y-12">
            <div className="flex justify-between">
                <div>Заробітня плата</div>
                <div>&#8372;{value[0]} грн - &#8372;{value[1]} грн</div>
            </div>
            <RangeSlider
                color="purpleHeart.6"
                size="sm"
                value={value}
                onChange={setValue}
                min={8000}
                max={80000}
            ></RangeSlider>
        </div>



    </div>
}

export default TalentsSearchBar