import React from 'react';
import Image from 'next/image';
import { galleryData } from './ServicesData';

const Services = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Featured Images</h2>
        
        <div className="gallery-grid">
          {galleryData.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item ${(index + 1) % 3 === 2 ? 'elevated' : ''}`}
            >
              <div className="image-wrapper">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;