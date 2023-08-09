import React from 'react'
import HomeLayout from '../../layouts/Home'
import { Typography } from '@mui/material'

const Dashboard = () => {
  return (
       <HomeLayout>
            <div className='mt-[10%] '>
            <Typography className='text-[24px] font-[500]'>Dashboard</Typography>
            <Typography className='text-[18px] font-[400]'>Overview</Typography>
      </div>
        </HomeLayout>
  )
}

export default Dashboard