import React, { useState } from 'react';
import Sidenav from '../../components/Dashboard/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../../components/Dashboard/Navbar';
import BangDiem from '../../components/Dashboard/KetQuaHocTap/BangDiem';
import SemesterList from '../../components/Dashboard/KetQuaHocTap/SemesterList';

export default function KetQuaHocTap() {
  const [selectedYear, setSelectedYear] = useState('Tất cả');
  const [selectedSemester, setSelectedSemester] = useState('Tất cả');

  const data = [
    {
      year: "2023-2024",
      semester: "Học kỳ 1",
      subjects: [
        { id: 1, subject: "Toán", averageScore: 8.0, evaluation: "Giỏi", details: "Chi tiết" },
        // Các môn học khác...
      ],
      semesterAverage: 8.0,
      academicPerformance: "Giỏi",
    },
    {
      year: "2023-2024",
      semester: "Học kỳ 2",
      subjects: [
        { id: 1, subject: "Toán", averageScore: 8.0, evaluation: "Giỏi", details: "Chi tiết" },
        // Các môn học khác...
      ],
      semesterAverage: 8.0,
      academicPerformance: "Giỏi",
    },
    // Dữ liệu của bạn ở đây
  ];

  return (
    <>
      <Navbar />
      <Box height={70}/>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexDirection: 'column', p: 3 }}>
          <SemesterList
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
          />
          <BangDiem
            data={data}
            selectedYear={selectedYear}
            selectedSemester={selectedSemester}
          />
        </Box>
      </Box>
    </>
  );
}
