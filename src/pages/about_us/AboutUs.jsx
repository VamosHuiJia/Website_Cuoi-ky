import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import backgroundImage from '../../assets/images/background_aboutus.png';
import bike1Large from '../../assets/images/kid_bike_1_large.png';
import bike1Small from '../../assets/images/kid_bike_1_small.png';
import bike2Large from '../../assets/images/girl_bike_2_large.png';
import bike2Small from '../../assets/images/girl_bike_2_small.png';
import bike3Large from '../../assets/images/street_bike_3_large.png';
import bike3Small from '../../assets/images/street_bike_3_small.png';
import bike4Large from '../../assets/images/sport_bike_4_large.png';
import bike4Small from '../../assets/images/sport_bike_4_small.png';
import bike5Large from '../../assets/images/racing_bike_5_large.png';
import bike5Small from '../../assets/images/racing_bike_5_small.png';

const AboutUs = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bikes = [
    {
      largeImage: bike1Large,
      smallImage: bike1Small,
      title: 'XE ĐẠP TRẺ EM',
      description:
        'Explore the ultimate journey with our newest bike collection for adventure and pure comfort. Explore the gateway in a whole new way with exciting adventures.',
    },
    {
      largeImage: bike2Large,
      smallImage: bike2Small,
      title: 'XE ĐẠP NỮ',
      description:
        'Explore the ultimate journey with our newest bike collection for adventure and pure comfort. Explore the gateway in a whole new way with exciting adventures.',
    },
    {
      largeImage: bike3Large,
      smallImage: bike3Small,
      title: 'XE ĐẠP ĐƯỜNG PHỐ',
      description:
        'Explore the ultimate journey with our newest bike collection for adventure and pure comfort. Explore the gateway in a whole new way with exciting adventures.',
    },
    {
      largeImage: bike4Large,
      smallImage: bike4Small,
      title: 'XE ĐẠP ĐỊA HÌNH',
      description:
        'Explore the ultimate journey with our newest bike collection for adventure and pure comfort. Explore the gateway in a whole new way with exciting adventures.',
    },
    {
      largeImage: bike5Large,
      smallImage: bike5Small,
      title: 'XE ĐẠP ĐUA',
      description:
        'Explore the ultimate journey with our newest bike collection for adventure and pure comfort. Explore the gateway in a whole new way with exciting adventures.',
    },
  ];

  // Tự động chuyển ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bikes.length);
    }, 7000); // Thời gian chuyển ảnh: 7 giây (7000ms)
    return () => clearInterval(interval);
  }, [bikes.length, currentIndex]); // Thêm currentIndex vào dependency để reset interval
  
  // Xử lý khi người dùng bấm vào ảnh nhỏ
  const handleBikeSelect = (index) => {
    setCurrentIndex(index);
  };

  // Xử lý điều hướng trái/phải
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bikes.length);
  };

  // Hiển thị tối đa 3 ảnh nhỏ
  const visibleSmallImages = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % bikes.length;
    visibleSmallImages.push({ ...bikes[index], originalIndex: index });
  }

  return (
    <div className="aboutus-wrapper">
      {/* Phần phía trên */}
      <div 
        className="aboutus-container" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">Hành trình của bạn bắt đầu từ đây</h1>
          <p className="description">
            Khám phá ngay để tìm nguồn cảm hứng, hòa mình vào thiên nhiên và tận hưởng mọi khoảnh khắc của bạn.
          </p>
        </div>
        <button onClick={() => navigate('/')} className="explore-button">
          Khám phá ngay
        </button>
      </div>

      {/* Phần carousel */}
      <div className="carousel-section">
        <h2 className="carousel-title">
          Chúng tôi có đa dạng các loại xe cho bạn lựa chọn
        </h2>
        <div className="carousel-container">
          <div className="carousel-item">
            <div className="carousel-text">
              <h3 className="bike-title">{bikes[currentIndex].title}</h3>
              {bikes[currentIndex].subtitle && (
                <p className="bike-subtitle">{bikes[currentIndex].subtitle}</p>
              )}
              <p className="bike-description">{bikes[currentIndex].description}</p>
              <button className="buy-now-button">Buy Now</button>
            </div>
            <div className="carousel-image">
              <img src={bikes[currentIndex].largeImage} alt={bikes[currentIndex].title} />
            </div>
          </div>
        </div>
        <div className="carousel-small-images">
          <button className="nav-arrow left-arrow" onClick={handlePrev}>
            &lt;
          </button>
          {visibleSmallImages.map((bike) => (
            <div
              key={bike.originalIndex}
              className={`small-image-item ${
                bike.originalIndex === currentIndex ? 'active' : ''
              }`}
              onClick={() => handleBikeSelect(bike.originalIndex)}
            >
              <img src={bike.smallImage} alt={bike.title} />
            </div>
          ))}
          <button className="nav-arrow right-arrow" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;