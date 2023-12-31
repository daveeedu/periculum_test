import React, { useState } from 'react'
import HomeLayout from '../../layouts/Home'
import SegmentDropdown from '../../components/others/SegmentDropdown';
import { ICloseSquare, IFilter, ITickSquare } from '../../utils/icons.utils';
import CustomModal from '../../components/modal/CustomModal';
import CheckboxGroup from '../../components/input/CheckboxInput';
import { categoryColors, categoryData } from '../../utils/fakeData';
import CustomTable from '../../components/tables/CustomTable';
import { useSelector } from 'react-redux';
import Pagination from '../../components/tables/Pagination';

const AllCustomers = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rows = useSelector((state) => state.customer.data);
  const rowsTwo = useSelector((state) => state.customer.bank);


  let data = rows?.map?.((d) => {
    const category = d?.category || "N/A";
    const statusIcon = d?.status ? (
      <img src={ITickSquare} alt='ITickSquare' />
    ) : (
      <img src={ICloseSquare} alt='ICloseSquare' />
    );
    const categoryStyle = categoryColors[category] || {};
    const model = {
      "Name": d?.name || "N/A",
      "Customer Id": d?.customerId || "N/A",
      "Category": ( //HANDLE STYLING OF THE cATEGORY COLUMN
        <div
          className="py-4 px-3 text-center"
          style={{
            backgroundColor: categoryStyle.background || 'transparent',
            color: categoryStyle.text || '#000',
          }}
        >
          {category}
        </div>
      ),
      "Loan Period": d?.loanPeriod || "N/A",
      "Status": ( //HANDLE STYLING OF THE STATUS COLUMN
        <div className="flex items-center gap-1">
          {statusIcon}
          <span className={`ml-2 ${d?.status ? 'text-green-500' : 'text-red-500'}`}>
            {d?.status ? 'ACTIVE' : 'DORMANT'}
          </span>
        </div>
      ),
      _data: d,
    };
    return model;
  });

  let dataTwo = rowsTwo?.map?.((d) => {
    const model = {
      "Customers": d?.customer || "N/A",
      "Total Number": d?.totalNumber || "N/A",
      "Transaction Value": d?.transactionValue || "N/A",
      "Loans Taken": d?.loansTaken || "N/A",
      "Loans PERFORMANCE": (  //HANDLE MAPING OF LIST ITEMS 
        <div className="flex items-center gap-1">
          <ul className="list-disc list-inside">
            <li >
              {d?.loansPerformance?.normal}
            </li>
            <li >
              {d?.loansPerformance?.watch}
            </li>
            <li >
              {d?.loansPerformance.nlp}
            </li>
          </ul>
        </div>
      ),
      _data: d,
    };
    return model;
  });

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
      <div className='lg:mt-[7%] md:mt-[12%] mt-[20%] text-start pl-8 md:pl-0'>
        <h1 className='text-[24px] font-[700] text-#000000 '>All Customers</h1>
      </div>
      <div className='md:flex md:justify-between mt-4 pr-10'>
        <div className='grid grid-cols-6 gap-4 xl:w-[40%] lg:w-[60%] md:w-[80%] w-100 md:pl-0 pl-8 md:mb-0 mb-8'>
          <div className='col-span-4'>
            <SegmentDropdown
              value={selectedValue}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="bg-[#DCE5FF] col-span-2 h-[90%] md:w-[70%] w-100 mt-1 py-3 px-8 text-[#407BFF] font-semibold hover:bg-[#d7dffa]"
          >
            Clear
          </button>
        </div>
        <button
          type="button"
          className="bg-[#407BFF] flex justify-center gap-3  h-[90%] py-4 px-6 ml-8 md:ml-0 text-white font-semibold hover:bg-[#3d78f7]"
          onClick={openModal}
        >
          <img src={IFilter} alt='IFilter' className='mt-1' />
          Sort
        </button>
      </div>

      {/* ALL CUSTOMERS TABLE */}

      <div className='mb-8'>
        <CustomTable {...{ data: data, tableClass: "border-separate border-spacing-y-2", }} />
        <Pagination />
      </div>

      {/* BANK PROFILE COMPARISON */}

      <h3 className='text-[20px] font-[600] text-start uppercase text-[#363C4F] pl-4 md:pl-0'>Bank Profile Comparison</h3>
      <div className='mb-10'>
        <CustomTable {...{ data: dataTwo, tableHeaderClass: "bg-white border-b-2 border-[#407BFF]" }} />
      </div>

      {/* MODAL COMPONENT */}

      <CustomModal isModalOpen={isModalOpen} closeModal={closeModal} title="Select Category">
        <CheckboxGroup options={categoryData} />
        <span className="text-[14px] font-[600] text-[#000]">Select Loan Period</span>
        <div className='md:grid md:grid-cols-2 gap-4'>
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

        <div className='flex md:justify-start justify-center'>
          <button
            type="button"
            className="bg-[#407BFF]  py-3 md:px-8 px-3 text-[14px] font-semibold text-white hover:bg-[#5488f8]"
          >
            Apply filter
          </button>
        </div>
      </CustomModal>
    </HomeLayout>
  )
}

export default AllCustomers