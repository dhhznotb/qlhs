import React, { useState } from 'react';
import './BangHocPhi.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function BangHocPhi({ onPrintInvoice }) {
  const [data, setData] = useState([
    { stt: 1, tenKhoanChi: 'Khoản chi 1', soLuong: 2, donGia: 50000, ghiChu: '', showQR: false },
    { stt: 2, tenKhoanChi: 'Khoản chi 2', soLuong: 1, donGia: 30000, ghiChu: '', showQR: false },
    // Thêm dữ liệu khác tại đây
  ]);

  const [open, setOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClickOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    const newData = [...data];
    newData[currentIndex].ghiChu = currentQuestion;
    setData(newData);
    setOpen(false);
    setCurrentQuestion('');
  };

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const totalCost = data.reduce((acc, curr) => acc + curr.soLuong * curr.donGia, 0);

  // const handlePrintInvoice = () => {
  //   onPrintInvoice(); // Gọi hàm in hóa đơn từ component cha
  //   const newData = data.map(item => ({ ...item, showQR: true }));
  //   setData(newData);
  // };

  return (
    <div className="banghocphi-container">
      <h2>Bảng Học Phí</h2>
      <table className="banghocphi-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khoản chi</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th>Ghi chú</th>
            {/* <th>Mã QR</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.stt}>
              <td>{item.stt}</td>
              <td>{item.tenKhoanChi}</td>
              <td>{item.soLuong}</td>
              <td>{item.donGia}</td>
              <td>{item.soLuong * item.donGia}</td>
              <td>
                <span
                  className="set-question-link"
                  onClick={() => handleClickOpen(index)}
                >
                  Gửi ý kiến
                </span>
              </td>
              {/* <td>
                {item.showQR && <QRCode value={item.tenKhoanChi + item.soLuong + item.donGia} />}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-cost">Tổng chi phí: {totalCost}</div>
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Gửi ý kiến</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Ý kiến của bạn"
            fullWidth
            variant="standard"
            value={currentQuestion}
            onChange={handleQuestionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy bỏ</Button>
          <Button onClick={handleSend}>Gửi đi</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
