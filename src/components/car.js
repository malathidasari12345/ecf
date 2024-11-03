import React from 'react';
import Slider from 'react-slick';


const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img 
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg" 
          alt="First slide" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
      </div>
      <div>
        <img 
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg" 
          alt="Second slide" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
      </div>
      <div>
        <img 
          src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/01c63eaa43ccb5ed.jpg?q=20" 
          alt="Third slide" 
          style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
        />
      </div>
      <div>
        <img 
          src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/01c63eaa43ccb5ed.jpg?q=20" 
          alt="Third slide" 
          style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
        />
      </div>
    </Slider>
  );
};

export default MyCarousel;
