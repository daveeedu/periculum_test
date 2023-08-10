import React from 'react';

const RadioButton = ({ options, value, onChange }) => {
    return (
        <div className="flex flex-row gap-5">
            {options.map((option, idx) => (
                <div key={idx} className="flex items-center">
                    <input
                        type="radio"
                        id={option.value}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        className="mr-2"
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioButton;
