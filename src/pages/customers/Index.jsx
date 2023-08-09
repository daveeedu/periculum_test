import { Typography } from '@mui/material'
import React from 'react'
import HomeLayout from '../../layouts/Home'

const AllCustomers = () => {
  return (
    <HomeLayout>
    <div className='mt-[10%] '>
    <Typography className='text-[24px] font-[500]'>All Customers</Typography>
    <Typography className='text-[18px] font-[400]'>Overview</Typography>
</div>
</HomeLayout>
  )
}

export default AllCustomers