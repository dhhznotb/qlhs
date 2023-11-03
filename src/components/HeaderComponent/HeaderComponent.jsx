import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',flexGrow: 1, p:3}}>
      PTEDU 
      <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: '#26baee',
        }}>
      <Link to={"/login"}>
      <Button variant="contained" href="#contained-buttons">
  Đăng nhập
</Button>
      </Link>
      </Box>
    </Box>
  )
}

export default HeaderComponent
