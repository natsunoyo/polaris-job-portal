import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateSort } from '../../Slices/SortSlice';

const opt = ['За релевантністю', 'Недавні', 'За зарплатою (від найменшої до найбільшої)', 'За зарплатою (від найбільшої до найменшої)'];
const talentSort = ['За релевантністю', 'За зарплатою (від найменшої до найбільшої)', 'За зарплатою (від найбільшої до найменшої)']

const Sort = (props: any) => {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState<string | null>("За релевантністю");
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = props.sort == "job" ? opt.map((item) => (
        <Combobox.Option className='!text-sm' value={item} key={item}>
            {item}
        </Combobox.Option>
    )) : talentSort.map((item) => (
        <Combobox.Option className='!text-sm' value={item} key={item}>
            {item}
        </Combobox.Option>))

    return (
        <Combobox
            store={combobox}
            width={150}
            position="bottom-start"
            onOptionSubmit={(val) => {
                setSelectedItem(val);
                dispatch(updateSort(val))
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>

                <div onClick={() => combobox.toggleDropdown()} className='border flex gap-2 border-purple-heart-600 px-2 py-1 rounded-xl items-center cursor-pointer'>
                    {selectedItem} <IconAdjustments className='h-5 w-5 text-purple-heart-400' />
                </div>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}

export default Sort;