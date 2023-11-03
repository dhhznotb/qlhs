import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Profile() {
  // Giả sử có một object user để lưu trữ thông tin cá nhân
  const user = {
    firstName: 'Nguyễn',
    lastName: 'Văn A',
    class: '10A1',
    address: '123 Đường ABC, Khu 1, Hùng Sơn',
    representative: 'Nguyễn Văn B',
    representativePhone: '0123456789',
    avatar: 'link_to_avatar_image', // Đường dẫn đến hình ảnh đại diện
  };

  return (
    <Container>
      <Box display="flex" p={3}>
        <Box flex={1} mr={2}>
          <Paper elevation={3}>
            <Box p={3} textAlign="center">
              <Avatar src={user.avatar} sx={{ width: 120, height: 120, margin: '0 auto' }} />
              <Typography variant="h6" mt={2}>
                {user.lastName} {user.firstName}
              </Typography>
              <Typography variant="body1">Lớp {user.class}</Typography>
            </Box>
          </Paper>
        </Box>
        <Box flex={2}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Thông Tin Cá Nhân</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <Typography variant="body1"><strong>Họ:</strong> {user.lastName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1"><strong>Tên:</strong> {user.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1"><strong>Lớp:</strong> {user.class}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1"><strong>Địa chỉ:</strong> {user.address}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1"><strong>Người đại diện:</strong> {user.representative}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1"><strong>Số điện thoại người đại diện:</strong> {user.representativePhone}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
