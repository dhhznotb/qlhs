// Login.jsx
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log('Tên đăng nhập:', email);
    console.log('Mật khẩu:', password);
  };

  return (
    <div className="login-container">
      <h1>Đăng Nhập</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mật Khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
