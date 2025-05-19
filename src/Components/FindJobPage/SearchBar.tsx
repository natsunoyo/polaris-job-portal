import { RangeSlider } from "@mantine/core"
import { dropdownData } from "../../Data/JobsData"
import MultiInput from "./MultiInput"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateFilter } from "../../Slices/FilterSlice"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<[number, number]>([8000, 80000]);
    const handleChange = (event: any) => {
        dispatch(updateFilter({ salaryOffered: event }))

    }

    return <div className="flex gap-8 px-5 py-8 items-center">

        {
            dropdownData.map((item, index) => <div key={index} className="w-1/4">
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
                onChangeEnd={handleChange}
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

export default SearchBar