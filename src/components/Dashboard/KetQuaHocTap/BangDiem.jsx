import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BangDiem({ data, selectedYear, selectedSemester }) {
  const filteredData = data
    .filter(item => (selectedYear === 'Tất cả' || item.year === selectedYear))
    .filter(item => (selectedSemester === 'Tất cả' || item.semester === selectedSemester))
    .sort((a, b) => b.year.localeCompare(a.year) || b.semester.localeCompare(a.semester));

  return (
    <div>
      {filteredData.map((semesterData, index) => (
        <Box key={index} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            {semesterData.year} - {semesterData.semester}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Môn học</TableCell>
                  <TableCell align="right">Điểm trung bình</TableCell>
                  <TableCell>Đánh giá</TableCell>
                  <TableCell>Chi tiết</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {semesterData.subjects.map((subject, idx) => (
                  <TableRow key={subject.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{idx + 1}</TableCell>
                    <TableCell>{subject.subject}</TableCell>
                    <TableCell align="right">{subject.averageScore}</TableCell>
                    <TableCell>{subject.evaluation}</TableCell>
                    <TableCell>{subject.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box marginTop={1}>
            <Typography variant="body1">Điểm trung bình học kỳ: {semesterData.semesterAverage}</Typography>
            <Typography variant="body1">Học lực: {semesterData.academicPerformance}</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default BangDiem;
