import React, { useState } from 'react'
import HomeLayout from '../../layouts/Home'
import SegmentDropdown from '../../components/others/SegmentDropdown';
import { IFilter } from '../../utils/icons.utils';
import CustomModal from '../../components/modal/CustomModal';
import CheckboxGroup from '../../components/input/CheckboxInput';
import { categoryData } from '../../utils/fakeData';

const AllCustomers = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

 

  return (
    <HomeLayout>
      <div className='mt-[7%] text-start'>
        <h1 className='text-[24px] font-[700] text-#000000'>All Customers</h1>
      </div>
      <div className='flex justify-between mt-4 pr-10'>
        <div className='grid grid-cols-6 gap-4 w-[40%] '>
          <div className='col-span-4'>
            <SegmentDropdown
              value={selectedValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="bg-[#DCE5FF] col-span-2 h-[90%] w-[70%] mt-1 py-3 px-8 text-[#407BFF] font-semibold hover:bg-[#d7dffa]"
          >
            Clear
          </button>
        </div>
        <button
          type="button"
          className="bg-[#407BFF] flex justify-center gap-3  h-[90%] py-4 px-6 text-white font-semibold hover:bg-[#3d78f7]"
          onClick={openModal}
        >
          <img src={IFilter} alt='IFilter' className='mt-1' />
          Sort
        </button>
      </div>
      <CustomModal isModalOpen={isModalOpen} closeModal={closeModal} title="Select Category">
        <CheckboxGroup options={categoryData} />
        <span className="text-[14px] font-[600] text-[#000]">Select Loan Period</span>
        <div className='grid grid-cols-2 gap-4'>
        <div className='my-4'>
                            <label htmlFor="startDate" className="block text-[12px] font-[500] text-[#000000]">
                                Start date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    className="block w-full bg-transparent rounded-[5px] border border-[#407BFF] py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Input customer ID"
                                />
                            </div>
                        </div>
                        <div className='my-4'>
                            <label htmlFor="endDate" className="block text-[12px] font-[500] text-[#000000]">
                                End date
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="endDate"
                                    id="endDate"
                                    className="block w-full bg-transparent rounded-[5px] border border-[#407BFF] py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Input customer ID"
                                />
                            </div>
                        </div>
        </div>
        
        <div className=''>
          <button
            type="button"
            className="bg-[#407BFF]  py-3 px-8 text-[] font-semibold text-white hover:bg-[#5488f8]"
          >
            Apply filter
          </button>
        </div>
      </CustomModal>
    </HomeLayout>
  )
}

export default AllCustomers