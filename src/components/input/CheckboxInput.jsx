import React, { useState } from 'react';

const CheckboxGroup = ({ options, onChange }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
        } else {
            setSelectedValues((prevSelectedValues) =>
                prevSelectedValues.filter((selectedValue) => selectedValue !== value)
            );
        }
    };

    const isChecked = (value) => selectedValues.includes(value);

    return (
        <div className=" grid grid-cols-5 -mt-5 mb-8">
            {options.map((option) => (
                <label key={option.value} className=" flex gap-1 ">
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={isChecked(option.value)}
                        onChange={handleCheckboxChange}
                        className=" h-5 w-5 "
                    />
                    <span className="text-[10px] font-[500] text-black mt-1">{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default CheckboxGroup;
