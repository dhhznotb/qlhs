import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function SemesterList({ selectedYear, setSelectedYear, selectedSemester, setSelectedSemester }) {
    const years = ['Tất cả', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
    const semesters = ['Tất cả', 'Học kỳ 1', 'Học kỳ 2'];

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="year-select-label">Năm</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={selectedYear}
          label="Năm"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="semester-select-label">Học kỳ</InputLabel>
        <Select
          labelId="semester-select-label"
          id="semester-select"
          value={selectedSemester}
          label="Học kỳ"
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map((semester) => (
            <MenuItem key={semester} value={semester}>
              {semester}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SemesterList;
