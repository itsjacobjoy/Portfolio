import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { slideshowData } from './SlideshowData';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides } = slideshowData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        >
          <div className="media-wrapper">
            {slide.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
                className="slideshow-media"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                className="slideshow-media"
                priority
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;