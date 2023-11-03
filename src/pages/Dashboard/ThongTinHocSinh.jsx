import React from 'react'
import Sidenav from '../../components/Dashboard/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../../components/Dashboard/Navbar';
import ThongTinHocSinhList from '../../components/Dashboard/ThongTinHocSinh/ThongTinHocSinhList';

export default function ThongTinHocSinh() {
  return (
    <>
      <Navbar />
      <Box height={40}/>
        <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <ThongTinHocSinhList/>
            </Box>
        </Box>  
    </>
  )
}
