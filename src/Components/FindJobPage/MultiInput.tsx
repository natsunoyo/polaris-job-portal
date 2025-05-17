// Imported from Mantine

import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';


const MultiInput = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setData(props.options);
    }, [])
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string[]>([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch('');

        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
            dispatch(updateFilter({ [props.title]: [...value, search] }))
        } else {
            dispatch(updateFilter({ [props.title]: [...value.includes(val) ? value.filter((v) => v !== val) : [...value, val]] }))
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
            );
        }
    };

    const handleValueRemove = (val: string) => {
        setValue((current) => current.filter((v) => v !== val));
        dispatch(updateFilter({ [props.title]: value.filter((v) => v !== val) }));
    }

    const values = value
        .slice(0, 1)
        .map((item) => (
            <Pill className="!h-8 text-center" key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                <div className='text-lg'>{item}</div>
            </Pill>
        ));

    const options = data
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
        .map((item) => (
            <Combobox.Option className='cursor-pointer' value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    <Checkbox size='xs' color='purpleHeart.3'
                        checked={value.includes(item)}
                        onChange={() => { }}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: 'none' }}
                    />
                    <span className='text-silver-sand-200 text-lg'>{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput className='text-purple-heart-400 bg-woodsmoke-900 rounded-full mr-1' variant='unstyled'
                    rightSection={<Combobox.Chevron />} onClick={() => combobox.toggleDropdown()}
                    leftSection={
                        <div className='text-purple-heart-400 p-1 bg-woodsmoke-900 rounded-full mr-1 '><props.icon /></div>
                    }>
                    <Pill.Group className='cursor-pointer'>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && (
                                    <Pill>+{value.length - 1} </Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder className='text-silver-sand-400 text-xl ml-4 cursor-pointer'>{props.title}</Input.Placeholder>
                        )}

                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown >
                <Combobox.Search
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder="Введіть пошуковий запит сюди"
                />
                <Combobox.Options
                    mah={200} style={{ overflowY: 'auto' }}>
                    {options}

                    {!exactOptionMatch && search.trim().length > 0 && (
                        <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                    )}

                    {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                        <Combobox.Empty>Нічого не знайдено...</Combobox.Empty>
                    )}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}

export default MultiInput

