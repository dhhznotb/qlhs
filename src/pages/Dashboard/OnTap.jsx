import React from 'react';
import Navbar from '../../components/Dashboard/Navbar';
import Sidenav from '../../components/Dashboard/Sidenav';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToanHocCard from '../../components/Dashboard/OnTap/ToanHocCard'; // Và các Card khác
// ...

export default function OnTap() {
  return (
    <>
      <Navbar />
      <Box height={40}/>
        <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <h1>Ôn Tập</h1>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <ToanHocCard />
                </Grid>
                {/* Các Card môn học khác */}
              </Grid>
            </Box>
        </Box>  
    </>
  );
}
