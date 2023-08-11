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
      <div className='lg:mt-[7%] md:mt-[12%] mt-[20%] text-start md:pl-0 pl-4'>
        <h1 className='text-[24px] font-[700] text-#000000'>Welcome to your Dashboard</h1>
      </div>

      <div className='flex justify-between mt-4 md:pr-10 md:pl-0 pl-4 pr-2 z-10'>
        <SelectInput
          defaultValue={segmentationAnalysisData.find(option => option.id === 1)?.value}
          value={selectedValue}
          onChange={handleChange}
          options={segmentationAnalysisData}
        />
        <DatePicker />
      </div>

      {/* DISPLAY TOTAL POPULATION AND ACTIVE CLIENTS CHART */}

      <div className='xl:grid xl:grid-cols-2 gap-10 md:pr-10 pr-4 md:block hidden mb-8'>
        <div className='md:mt-[12%]  bg-[#FFF] py-5 pl-6 text-start '>
          <h3 className='text-[20px] font-[700]'>Total Population</h3>
          <Box className="md:mt-14">
            <PieChart />
          </Box>
        </div>
        <div className='xl:mt-[12%] mt-8 bg-[#FFF] py-5 pl-6 text-start text-[#292D32] '>
          <h3 className='text-[20px] font-[700] '>Active Clients <span className='text-[14px] font-[600]'>(percentage)</span></h3>
          <Box className="md:mt-14">
            <DoughnutChart />
          </Box>
        </div>
      </div>

      {/* ACTIVE CLIENTS */}

      <div className='text-white md:mt-8 mt-[15%] xl:grid xl:grid-cols-9 xl:grid-rows-1 grid-cols-1  gap-4 w-100 px-4 md:px-0 md:pr-9 pr-3 mb-8'>
        <div className='bg-[#2A38A4] col-span-4 py-5 pl-6 text-start'>
          <h3 className='text-[20px] font-[700] '>Active Clients </h3>
          <span className='text-[14px] font-[600]'>(in years)</span>
          <div className='grid md:grid-cols-5 md:grid-rows-1 grid-cols-2 grid-rows-3 gap-2'>
            {activeClientsData.map((data) => (
              <Box className="flex flex-col mt-5" key={data.id}>
                <span className='text-[12px] font-[500]'>{data.title}</span>
                <span className='text-[34px] font-[600]'>{data.value}</span>
              </Box>)
            )}
          </div>
        </div>

        {/* AVERAGE TRANSACTIONAL VALUE */}

        <div className='bg-[#407BFF] col-span-5 py-5 pl-6 text-start'>
          <h3 className='text-[20px] font-[700] '>Average Transactional Value </h3>
          <span className='text-[14px] font-[600]'>(Credit)</span>
          <div className='grid md:grid-cols-5 md:grid-rows-1 grid-cols-2 grid-rows-3'>
            {averageTransactionalValueData.map((data) => (
              <Box className="flex flex-col mt-5" key={data.id}>
                <span className='text-[12px] font-[500]'>{data.title}</span>
                <span className='lg:text-[20px] text-[18px] font-[600]'>{data.value}</span>
              </Box>)
            )}
          </div>
        </div>
      </div>

      {/* AVERAGE MONTHLY BALANCE */}

      <h3 className='text-[20px] font-[700] text-start text-[#363C4F] md:ml-0 ml-4'>AVERAGE MONTHLY BALANCE</h3>
      <div className='lg:grid lg:grid-cols-5 text-start mb-8 md:pr-10 pr-4 md:pl-0 pl-5'>
        {averageTransactionalValueData.map((data) => (
          <Box className="flex flex-col mt-8 py-10 xl:pl-8 lg:pl-4 pl-8 lg:border-r-2 bg-[#FFF] " key={data.id}>
            <span className='xl:text-[18px] lg:text-[14px] md:text-[18px] font-[600]'>{data.title}</span>
            <span className='xl:text-[30px] lg:text-[22px] md:text-[30px] font-[700]'>{data.value}</span>
          </Box>
        ))}
      </div>

      {/* PILLAR DISTRIBUTION */}

      <h3 className='text-[20px] font-[700] text-start text-[#363C4F] md:ml-0 ml-5'>PILLAR DISTRIBUTION</h3>
      <div className='xl:flex gap-8 md:pl-0 pl-5'>
        {pillarDistributionData.map((data) => (
          <div className='text-start flex text-start mt-4 xl:pl-0 md:pl-6' key={data.id}>
            <div className={`w-[20px] h-[20px]  mr-1 rounded-[50%] `} style={{
              backgroundColor: data.color
            }}></div>
            <span className='xl:text-[11px] text-[14px] font-[600]'>{data.title}</span>
          </div>
        ))}
      </div>

      {/* The Agric Clients Chart */}
      <div className='xl:grid xl:grid-cols-3 gap-5 md:pr-10 pr-4 md:pl-0 pl-4 mb-8  '>
        <div className='mt-[8%] bg-[#FFF] py-5 text-center'>
          <div className='bg-[#2A38A4] mx-6 py-4'>
            <h3 className='text-[20px] font-[700] text-white'>The Agric Clients</h3>
          </div>
          <Box className="ml-6">
            <BarChart id="barChart_1" />
          </Box>
        </div>

        {/* The Micro Techs Chart */}
        <div className='mt-[8%] bg-[#FFF] py-5 text-center '>
          <div className='bg-[#2A38A4] mx-6 py-4'>
            <h3 className='text-[20px] font-[700] text-white'>The Micro Techs</h3>
          </div>
          <Box className="ml-6">
            <BarChart id="barChart_2" />
          </Box>
        </div>

        {/* The Corporates Chart */}
        <div className='mt-[8%] bg-[#FFF] py-5 text-center '>
          <div className='bg-[#2A38A4] mx-6 py-4'>
            <h3 className='text-[20px] font-[700] text-white'>The Corporates</h3>
          </div>
          <Box className="ml-6">
            <BarChart id="barChart_3" />
          </Box>
        </div>
      </div>

      {/* The Retail Techs Chart */}
      <div className='xl:grid xl:grid-cols-2 gap-10 md:pr-10 pr-4 md:pl-0 pl-4  mb-8'>
        <div className='mt-8 bg-[#FFF] py-5 text-center '>
          <div className='bg-[#2A38A4] mx-6 py-4'>
            <h3 className='text-[20px] font-[700] text-white'>The Retail Techs</h3>
          </div>
          <Box className="mx-6">
            <BarChart id="barChart_4" />
          </Box>
        </div>

        {/* The Loyalists Chart */}
        <div className='mt-8 bg-[#FFF] py-5  text-center '>
          <div className='bg-[#2A38A4] mx-6 py-4'>
            <h3 className='text-[20px] font-[700] text-white'>The Loyalists</h3>
          </div>
          <Box className="mx-6">
            <BarChart id="barChart_5" />
          </Box>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Dashboard