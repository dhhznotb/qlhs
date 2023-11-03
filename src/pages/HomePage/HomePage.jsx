import React from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import ThongTinChung from '../Dashboard/ThongTinChung'
import { Box } from '@mui/material'


function HomePage() {
  return (
    <>
      <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
      <HeaderComponent/>
      <ThongTinChung/>
      </Box>
    </>
  )
}

export default HomePage
