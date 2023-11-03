import React from 'react'
import Sidenav from '../../components/Dashboard/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../../components/Dashboard/Navbar';
import format from 'date-fns/format';
import TimeTable from '../../components/Dashboard/ThoiKhoaBieu/TimeTable'

const today = new Date();
const formattedDate = format(today, 'MMMM d, yyyy'); // Định dạng ngày tháng

export default function ThoiKhoaBieu() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Thời Khóa Biểu</h1>
          <p>{formattedDate}</p>
          <TimeTable />
        </Box>
      </Box>  
    </>
  )
}
