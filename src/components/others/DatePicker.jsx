import React, { useState, useEffect, useRef } from 'react';
import { ICalendar } from '../../utils/icons.utils';

const DatePicker = ({ label }) => {
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
        <div className="relative inline-block xl:w-[25%] lg:w-[35%] md:w-[45%] w-100 md:mt-0  " ref={dropdownRef}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <div
                    className="border border-[#407BFF] bg-transparent flex justify-between  gap-1 md:text-[15px] text-[10px] font-[500] text-[ #363C4F] block w-full mt-1 py-4 md:px-4 px-3 bg-white cursor-pointer"
                    onClick={toggleOptions}
                >
                    {"Loan Data Period"}
                    <img src={ICalendar} alt='IArrowDown' />
                </div>
                {isOpen && (
                    <div className="absolute top-full text-start left-0 w-full mt-1 px-4 pb-4 bg-white z-0">
                        <h3 className='my-4 text-[14px] font-[700]'>Insert date range</h3>
                        <div className=''>
                            <label htmlFor="startDate" className="block text-[12px] font-[500] text-[#363C4F]">
                                Start date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    className="block w-full bg-[#E7EFFF] rounded-[5px] border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="startDate" className="block text-[12px] font-[500] text-[#363C4F]">
                                End date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    className="block w-full bg-[#E7EFFF] rounded-[5px] border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="bg-[#407BFF]  py-3 px-8 text-[] font-semibold text-white hover:bg-[#5488f8]"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DatePicker;
