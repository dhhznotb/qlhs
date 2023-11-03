import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function ToanHocCard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/on-tap/toan-hoc'); // Đường dẫn đến trang ôn tập Toán học
  };

  return (
    <Card onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Toán học
        </Typography>
        <Typography variant="body2">
          Ôn tập các chương trình Toán học
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ToanHocCard;
