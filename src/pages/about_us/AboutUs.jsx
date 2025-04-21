import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

// Ảnh cho phần carousel
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
import carouselBackground from '../../assets/images/bg_carousel.png';

// Ảnh cho phần bike categories 
import kidBikeCategory from '../../assets/images/Bicycle_child.png';
import girlBikeCategory from '../../assets/images/Bicycle_women.png';
import streetBikeCategory from '../../assets/images/Bicycle_street.png';
import sportBikeCategory from '../../assets/images/Bicycle_sport.png';
import racingBikeCategory from '../../assets/images/Bicycle_racing.png';
import CategoriesBackground from '../../assets/images/bg_categories.png';

// Video
import backgroundVideo from '../../assets/videos/HVN.mp4'; 

const AboutUs = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chuyển ảnh
  const bikes = [
    {
      largeImage: bike1Large,
      smallImage: bike1Small,
      title: 'XE ĐẠP TRẺ EM',
      description:
        'Xe đạp trẻ em là người bạn đồng hành lý tưởng giúp bé phát triển thể chất, rèn luyện sự cân bằng và kỹ năng vận động. Thiết kế an toàn, màu sắc bắt mắt, khung xe chắc chắn và yên xe êm ái — phù hợp cho các bé ở nhiều độ tuổi, từ những chuyến đi đầu đời đến những hành trình khám phá thế giới xung quanh.',
    },
    {
      largeImage: bike2Large,
      smallImage: bike2Small,
      title: 'XE ĐẠP NỮ',
      description:
        'Xe đạp nữ được thiết kế tinh tế, nhẹ nhàng và thanh lịch, phù hợp với vóc dáng và nhu cầu sử dụng của phái đẹp. Dòng xe này chú trọng đến sự thoải mái khi di chuyển, yên xe êm, khung thấp dễ bước lên xuống — lý tưởng cho việc đi học, đi làm hay dạo phố.',
    },
    {
      largeImage: bike3Large,
      smallImage: bike3Small,
      title: 'XE ĐẠP ĐƯỜNG PHỐ',
      description:
        'Xe đạp đường phố mang phong cách năng động, hiện đại — là lựa chọn hoàn hảo cho những ai yêu thích sự tiện dụng và linh hoạt. Thiết kế gọn nhẹ, dễ điều khiển, thích hợp cho việc di chuyển trong thành phố, đi làm, đi học hay dạo chơi cuối tuần.',
    },
    {
      largeImage: bike4Large,
      smallImage: bike4Small,
      title: 'XE ĐẠP ĐỊA HÌNH',
      description:
        'Xe đạp địa hình được thiết kế chắc chắn, trang bị phuộc nhún và lốp lớn giúp chinh phục mọi cung đường gồ ghề, đồi núi hay địa hình khó. Đây là lựa chọn lý tưởng cho những ai đam mê phiêu lưu, thử thách và khám phá thiên nhiên.',
    },
    {
      largeImage: bike5Large,
      smallImage: bike5Small,
      title: 'XE ĐẠP ĐUA',
      description:
        'Xe đạp đua là dòng xe dành cho tốc độ, thiết kế khí động học, khung xe siêu nhẹ và bánh xe mỏng giúp giảm ma sát tối đa. Thích hợp cho những ai yêu thích thể thao, tập luyện sức bền, hoặc tham gia các giải đua chuyên nghiệp.',
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

  // Danh sách các danh mục xe đạp cho phần 4 (có thêm thuộc tính path)
  const bikeCategories = [
    {
      image: kidBikeCategory,
      title: 'XE ĐẠP TRẺ EM',
      path: '/products/kid-bikes', // Đường dẫn đến danh mục Xe đạp trẻ em
    },
    {
      image: girlBikeCategory,
      title: 'XE ĐẠP NỮ',
      path: '/products/girl-bikes', // Đường dẫn đến danh mục Xe đạp nữ
    },
    {
      image: streetBikeCategory,
      title: 'XE ĐẠP ĐƯỜNG PHỐ',
      path: '/products/street-bikes', // Đường dẫn đến danh mục Xe đạp đường phố
    },
    {
      image: sportBikeCategory,
      title: 'XE ĐẠP ĐỊA HÌNH',
      path: '/products/sport-bikes', // Đường dẫn đến danh mục Xe đạp địa hình
    },
    {
      image: racingBikeCategory,
      title: 'XE ĐẠP ĐUA',
      path: '/products/racing-bikes', // Đường dẫn đến danh mục Xe đạp đua
    },
  ];

  // Hàm xử lý điều hướng khi bấm vào danh mục
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="aboutus-wrapper">
      {/* Phần 1: */}
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

      {/* Phần 2: carousel */}
      <div 
        className="carousel-section" 
        style={{ backgroundImage: `url(${carouselBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
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

      {/* Phần 3: Video */}
      <div className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <h2 className="video-title">
            Không chỉ vậy, chúng tôi còn có những sản phẩm độc nhất dành riêng cho bạn
          </h2>
        </div>
      </div>

      {/* Phần 4: Bike Categories */}
      <div className="bike-categories-section"
      style={{ 
        backgroundImage: `url(${CategoriesBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <h2 className="categories-title">
          Vậy bạn đã có sự lựa chọn cho mình chưa?
        </h2>
        <div className="bike-categories-container">
          {bikeCategories.map((category, index) => (
            <div 
              key={index} 
              className="bike-category-item"
              onClick={() => handleCategoryClick(category.path)}
            >
              <div className="category-image-container">
                <img src={category.image} alt={category.title} className="category-image" />
                <p className="category-title">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6574509020306!2d105.78236867531247!3d21.046387980607324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zVHLGsOG7nW5nIMSQ4bqhaSho4buNYyDEkGnhu4duIEzhu7Fj!5e0!3m2!1svi!2s!4v1743582808844!5m2!1svi!2s"
          width="1200"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;