import { Box } from '@mui/material'
import React from 'react'
import Sidenav from '../../components/Dashboard/Sidenav'
import Navbar from '../../components/Dashboard/Navbar'
import ThongTinChung from './ThongTinChung'

export default function Dashboard() {
  return (
    <>
        <Navbar/>
        <Box sx={{display: 'flex', flexGrow: 1, p: 3}}>
            <Sidenav/>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box height={40}/>
            <ThongTinChung/>
            </Box>
        </Box>
    </>
  )
}
