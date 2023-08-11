import React, { useState } from 'react'
import HomeLayout from '../../layouts/Home'
import { Box } from '@mui/material'
import PieChart from '../../components/charts/PieChart'
import SelectInput from '../../components/input/SelectInput'
import DatePicker from '../../components/others/DatePicker'
import { activeClientsData, averageTransactionalValueData, pillarDistributionData, segmentationAnalysisData } from '../../utils/fakeData'
import DoughnutChart from '../../components/charts/DoughnutChart'
import BarChart from '../../components/charts/BarChart'

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

 
  return (
    <HomeLayout>
      <div className='mt-[7%] text-start'>
        <h1 className='text-[24px] font-[700] text-#000000'>Welcome to your Dashboard</h1>
      </div>
      <div className='flex justify-between mt-4 pr-10 z-10'>
        <SelectInput
          defaultValue={segmentationAnalysisData.find(option => option.id === 1)?.value}
          value={selectedValue}
          onChange={handleChange}
          options={segmentationAnalysisData}
        />
        <DatePicker />
      </div>
      <div className='grid grid-cols-2 gap-10 pr-10  mb-8'>
      <div className='mt-[12%] bg-[#FFF] py-5 pl-6 text-start '>
        <h3 className='text-[20px] font-[700]'>Total Population</h3>
        <Box className="mt-14">
          <PieChart />
        </Box>
      </div>
      <div className='mt-[12%] bg-[#FFF] py-5 pl-6 text-start text-[#292D32] '>
      <h3 className='text-[20px] font-[700] '>Active Clients <span className='text-[14px] font-[600]'>(percentage)</span></h3>
        <Box className="mt-14">
          <DoughnutChart />
        </Box>
      </div>
      </div>
      <div className='text-white grid grid-cols-9 gap-4 w-100 pr-10 mb-8'>
        <div className='bg-[#2A38A4] col-span-4 py-5 pl-6 text-start'>
          <h3 className='text-[20px] font-[700] '>Active Clients </h3>
          <span className='text-[14px] font-[600]'>(in years)</span>
          <div className='grid grid-cols-5 gap-2'>
            {activeClientsData.map((data) => (
            <Box className="flex flex-col mt-5" key={data.id}>
              <span className='text-[12px] font-[500]'>{data.title}</span>
              <span className='text-[34px] font-[600]'>{data.value}</span>
            </Box>)
            )}
          </div>
        </div>
        <div className='bg-[#407BFF] col-span-5 py-5 pl-6 text-start'>
        <h3 className='text-[20px] font-[700] '>Average Transactional Value </h3>
          <span className='text-[14px] font-[600]'>(Credit)</span>
          <div className='grid grid-cols-5'>
            {averageTransactionalValueData.map((data) => (
            <Box className="flex flex-col mt-5" key={data.id}>
              <span className='text-[12px] font-[500]'>{data.title}</span>
              <span className='text-[20px] font-[600]'>{data.value}</span>
            </Box>)
            )}
          </div>
        </div>
      </div>
      <h3 className='text-[20px] font-[700] text-start text-[#363C4F]'>AVERAGE MONTHLY BALANCE</h3>
      <div className='grid grid-cols-5 text-start mb-8 pr-10'>
      {averageTransactionalValueData.map((data) => (
            <Box className="flex flex-col mt-8 py-10 pl-8  border-r-2 bg-[#FFF] " key={data.id}>
              <span className='text-[18px] font-[600]'>{data.title}</span>
              <span className='text-[30px] font-[700]'>{data.value}</span>
            </Box>
      ))}
      </div>
      <h3 className='text-[20px] font-[700] text-start text-[#363C4F]'>PILLAR DISTRIBUTION</h3>
      <div className='flex gap-8'>
      {pillarDistributionData.map((data) => (
        <div className='text-start flex text-start mt-4' key={data.id}>
          <div className={`w-[20px] h-[20px]  mr-1 rounded-[50%] bg-[${data.color}]`}></div>
          <span className='text-[14px] font-[600]'>{data.title}</span>
        </div>
         ))}
      </div>
      <div className='grid grid-cols-3 gap-5 pr-10  mb-8  '>
      <div className='mt-[8%] bg-[#FFF] py-5 text-center'>
        <div className='bg-[#2A38A4] mx-6 py-4'>
          <h3 className='text-[20px] font-[700] text-white'>The Agric Clients</h3>
          </div>
        <Box className="ml-6">
          <BarChart id="barChart_1"/>
        </Box>
      </div>
      <div className='mt-[8%] bg-[#FFF] py-5 text-center '>
      <div className='bg-[#2A38A4] mx-6 py-4'>
          <h3 className='text-[20px] font-[700] text-white'>The Micro Techs</h3>
          </div>
        <Box className="ml-6">
          <BarChart id="barChart_2"/>
        </Box>
      </div>
      <div className='mt-[8%] bg-[#FFF] py-5 text-center '>
      <div className='bg-[#2A38A4] mx-6 py-4'>
          <h3 className='text-[20px] font-[700] text-white'>The Corporates</h3>
          </div>
        <Box className="ml-6">
          <BarChart id="barChart_3"/>
        </Box>
      </div>
      </div>
      <div className='grid grid-cols-2 gap-10 pr-10  mb-8'>
      <div className='mt-8 bg-[#FFF] py-5 text-center '>
      <div className='bg-[#2A38A4] mx-6 py-4'>
          <h3 className='text-[20px] font-[700] text-white'>The Retail Techs</h3>
          </div>
        <Box className="mx-6">
          <BarChart id="barChart_4"/>
        </Box>
      </div>
      <div className='mt-8 bg-[#FFF] py-5  text-center '>
      <div className='bg-[#2A38A4] mx-6 py-4'>
          <h3 className='text-[20px] font-[700] text-white'>The Loyalists</h3>
          </div>
        <Box className="mx-6">
          <BarChart id="barChart_5"/>
        </Box>
      </div>
      </div>
    </HomeLayout>
  )
}

export default Dashboard