import React, { useState } from 'react';
import './Footer.css';

// Import các biểu tượng mạng xã hội từ assets
import facebookIcon from '../../assets/icons/Facebook_icon.png';
import instagramIcon from '../../assets/icons/Instagram_icon.png';
import twitterIcon from '../../assets/icons/X_icon.png';
import linkedinIcon from '../../assets/icons/Line_icon.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic xử lý đăng ký nhận thông báo (có thể gửi email đến server)
    console.log('Subscribed with email:', email);
    setEmail(''); // Reset input sau khi gửi
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: About Us */}
        <div className="footer-column">
          <h3>Giới thiệu</h3>
          <p>
            HVN là cửa hàng bán xe đạp chất lượng hàng đầu thế giới. <br />
            "Niềm vui của bạn là hạnh phúc của chúng tôi."
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Cột 2: Working Time */}
        <div className="footer-column">
          <h3>Giờ làm việc</h3>
          <ul>
            <li>Thứ hai <span>9h30 - 18h30</span></li>
            <li>Thứ ba <span>9h30 - 18h30</span></li>
            <li>Thứ tư <span>9h30 - 18h30</span></li>
            <li>Thứ năm <span>9h30 - 18h30</span></li>
            <li>Thứ sáu <span>9h30 - 18h30</span></li>
            <li>Thứ bảy <span>9h30 - 18h30</span></li>
            <li>Chủ nhật <span>9h30 - 18h30</span></li>
          </ul>
        </div>

        {/* Cột 3: Contact Us */}
        <div className="footer-column">
          <h3>Liên hệ với chúng tôi</h3>
          <p>
            TP. Hà Nội <br />
            (+84) 1234-5678 <br />
            giahuy11@gmail.com
          </p>
          <p>
            TP. Đà Nẵng <br />
            (+84) 6666-8888 <br />
            vannam22@gmail.com
          </p>
          <p>
            TP. Hồ Chí Minh <br />
            (213) 054-2004 <br />
            xuanviet33@gmail.com
          </p>
        </div>

        {/* Cột 4: Subscribe Us */}
        <div className="footer-column">
          <h3>Đăng ký nhận thông tin</h3>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Enter your email to subscribe"
            />
            <button type="submit">Gửi</button>
          </form>
          <p>Đăng ký ngay để nhận thông báo ngay khi có sản phẩm mới.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Copyright 2025 | Design by HVN</p>
      </div>
    </footer>
  );
};

export default Footer;