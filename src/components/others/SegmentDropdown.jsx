import React, { useState, useEffect, useRef } from 'react';
import { IProfile } from '../../utils/icons.utils';
import RadioButton from '../input/RadioButton';
import { segmentData } from '../../utils/fakeData';

const SegmentDropdown = ({ label, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
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

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

   

    return (
        <div className="relative inline-block w-[100%]" ref={dropdownRef}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <div
                    className="bg-white flex justify-start gap-4 text-[15px] font-[500] text-[ #363C4F] block w-full mt-1 py-4 px-4 bg-white cursor-pointer"
                    onClick={toggleOptions}
                >
                    <img src={IProfile} alt='IArrowDown' />
                    {value || "Segment Customer"}

                </div>
                {isOpen && (
                    <div className="absolute top-full text-start left-0 w-full mt-1 px-4 pb-4 bg-white ">
                        <div className='my-4'>
                            <label htmlFor="customerId" className="block text-[12px] font-[500] text-[#000000]">
                                Customer ID
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="customerId"
                                    id="customerId"
                                    className="block w-full bg-transparent rounded-[5px] border border-[#407BFF] py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Input customer ID"
                                />
                            </div>
                        </div>
                        <div className='my-4'>
                            <RadioButton
                                options={segmentData}
                                value={selectedValue} onChange={handleChange}
                            />
                        </div>
                        {selectedValue === 'existing' ? (
                            <button
                                type="button"
                                className="bg-[#407BFF] w-full py-3 px-8 text-[14px] font-semibold text-white hover:bg-[#5488f8]"
                            >
                                Search
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-[#407BFF] w-full py-3 px-8 text-[14px]  font-semibold text-white hover:bg-[#5488f8]"
                            >
                                Add new customer
                            </button>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
};

export default SegmentDropdown;
