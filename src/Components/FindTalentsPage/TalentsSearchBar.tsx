import { Input, RangeSlider } from "@mantine/core"
import { useState } from "react"
import MultiInput from "../FindJobPage/MultiInput";
import { searchFields } from "../../Data/TalentsData";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const TalentsSearchBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<[number, number]>([8000, 80000]);
    const [name, setName] = useState("");
    const handleChange = (name: any, event: any) => {
        if (name == "expectedSalary") dispatch(updateFilter({ expectedSalary: event }))
        else {
            dispatch(updateFilter({ name: event.target.value }));
            setName(event.target.value);
        }

    }

    return <div className="flex gap-8 px-5 py-8 items-center !text-woodsmoke-200">

        <div className="flex items-center ">
            <Input defaultValue={name} onChange={(e) => handleChange("name", e)} leftSection={
                <div className='text-purple-heart-400 p-1 bg-woodsmoke-900 rounded-full mr-1 '><IconUserCircle /></div>
            } className="bg-woodsmoke-900 rounded-full cursor-pointer items-center" variant="unstyled" size="md" placeholder="Кандидат" />
        </div>



        {
            searchFields.map((item, index) => {
                return <React.Fragment key={index}><div key={index} className="w-1/4">
                    <MultiInput {...item} />
                </div>
                </React.Fragment>
            })
        }


        <div className="w-1/4 [&_.mantine-Slider-label]:!translate-y-12">
            <div className="flex justify-between">
                <div>Заробітня плата</div>
                <div>&#8372;{value[0]} грн - &#8372;{value[1]} грн</div>
            </div>
            <RangeSlider
                onChangeEnd={(e) => handleChange("expectedSalary", e)}
                color="purpleHeart.6"
                size="sm"
                value={value}
                onChange={setValue}
                min={8000}
                max={80000}
                step={1000}
                minRange={2000}
            ></RangeSlider>
        </div>



    </div>
}

export default TalentsSearchBar