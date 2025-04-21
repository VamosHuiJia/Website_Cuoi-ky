// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign_in.css';

// Import các hình ảnh và logo từ assets
import hvnLogo from '../../assets/images/Logo_HVN.png'; // Logo HVN
import backgroundImage from '../../assets/images/Background_login_3.jpg'; // Hình nền không gian
import googleIcon from '../../assets/icons/Google_Color.png'; // Icon Google
import facebookIcon from '../../assets/icons/Facebook_Color.png'; // Icon Facebook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic xử lý đăng nhập (có thể gửi dữ liệu đến server)
    console.log('Login with:', { email, password });
    // Giả lập đăng nhập thành công, chuyển hướng đến trang chính
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // Logic đăng nhập bằng Google
    console.log('Login with Google');
  };

  const handleFacebookLogin = () => {
    // Logic đăng nhập bằng Facebook
    console.log('Login with Facebook');
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Logo HVN */}
      <div className="login-logo">
        <Link to="/">
          <img src={hvnLogo} alt="HVN Logo" />
        </Link>
      </div>

      {/* Nội dung chính */}
      <div className="login-content">
        {/* Phần bên trái: Văn bản */}
        <div className="login-left">
          <h1>Hãy bắt đầu cuộc phiêu lưu</h1>
        </div>

        {/* Phần bên phải: Form đăng nhập */}
        <div className="login-right">
          <h2>Đăng nhập</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Nhập email của bạn</label>
              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nhập mật khẩu</label>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Đăng nhập
            </button>
          </form>

          {/* Đăng nhập bằng Google/Facebook */}
          <div className="social-login">
            <p>Hoặc với</p>
            <div className="social-buttons">
              <button onClick={handleGoogleLogin} className="social-button google">
                <img src={googleIcon} alt="Google" />
                Google
              </button>
              <button onClick={handleFacebookLogin} className="social-button facebook">
                <img src={facebookIcon} alt="Facebook" />
                Facebook
              </button>
            </div>
          </div>

          {/* Liên kết đăng ký */}
          <p className="signup-link">
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký tại đây</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;