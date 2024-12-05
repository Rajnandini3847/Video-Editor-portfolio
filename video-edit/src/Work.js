import React from 'react';
import Slider from 'react-slick';
import './Work.css'; // Custom CSS for styling

const Work = () => {
    const videoUrls = [
        'https://www.youtube.com/embed/fepaY9p511I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0',
        'https://www.youtube.com/embed/fepaY9p511I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0',
        'https://www.youtube.com/embed/fepaY9p511I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0',
        'https://www.youtube.com/embed/fepaY9p511I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0',
        'https://www.youtube.com/embed/fepaY9p511I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0',
      ];
      

      const settings = {
        infinite: true,
        speed: 300, // Slow the transition speed
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set a slower speed (in milliseconds)
        cssEase: 'linear',
        centerMode: true,
        variableWidth: true,
      };

  return (
    <div className="work-section">
      <div className="heading">
        <h2 className="work-title">What we craft...</h2>
        <button className="button">View All</button>
      </div>
      <Slider {...settings} className="work-slider">
        {videoUrls.map((url, index) => (
          <div key={index} className="video-container">
            <iframe
              src={url}
              className="work-video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`video-${index}`}
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Work;
