import React from 'react';
import Image from 'next/image';
import { testimonialData } from './TestimonialData';

const Testimonial = () => {
  const data = testimonialData.mainData;

  return (
    <div id="about" className="section">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-center about-box">
          {/* Left: Text */}
          <div className="col-12 col-xl-6 order-1 order-xl-1">
            {data.headingEyebrow && (
              <span className="title-heading text-white-04">{data.headingEyebrow}</span>
            )}
            <h1 className="display-3 fw-medium mb-3">
              {data.headingLeft}
              <span className="text-gradient">{data.headingRight}</span>
            </h1>
            <p className="about-text">{data.description}</p>
          </div>

          {/* Right: Image */}
          <div className="col-12 col-xl-6 text-center order-2 order-xl-2">
            <Image
              src={data.image}
              alt="About Me"
              className="about-image"
              width={560}
              height={560}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
