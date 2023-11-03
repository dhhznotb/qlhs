import React from 'react'
import Sidenav from '../../components/Dashboard/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../../components/Dashboard/Navbar';
import BangHocPhi from '../../components/Dashboard/HocPhi/BangHocPhi';
import ThanhToan from '../../components/Dashboard/HocPhi/ThanhToan';

export default function HocPhi() {
  return (
    <>
    <Navbar />
      <Box height={65}/>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}> {/* Thay đổi dạng hiển thị thành hàng ngang */}\
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <BangHocPhi /> {/* Hiển thị bảng học phí */}
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ThanhToan /> {/* Hiển thị phần thanh toán */}
            </Box>
        </Box>  
    </>
  )
}
