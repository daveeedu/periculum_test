import React, { useState, useEffect, useRef } from 'react';
import { IArrowDown } from '../../utils/icons.utils';

const SelectInput = ({ label, value, defaultValue, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleDocumentClick);
        return () => {
            window.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className="relative inline-block lg:w-[35%] md:w-[45%] w-[90%] z-15" ref={dropdownRef}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <div
                    className="flex justify-between gap-1 md:text-[15px] text-[10px] font-[500] text-[ #363C4F] block w-full mt-1 py-5 px-3 bg-white cursor-pointer"
                    onClick={toggleOptions}
                >
                    {value || defaultValue}
                    <img src={IArrowDown} alt='IArrowDown' />
                </div>
                {isOpen && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-white ">
                        {options.map((option) => (
                            <div
                                key={option.id}
                                className="md:text-[18px] text-[10px] font-[700] text-[#000] text-start py-4 px-3 md:px-3 z-15 cursor-pointer"
                                onClick={() => {
                                    onChange(option.value);
                                    toggleOptions();
                                }}
                            >
                                {option.value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectInput;
