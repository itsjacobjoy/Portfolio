import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { testimonialData } from './TestimonialData';

const Testimonial = () => {
    return (
        <div id="testimonial" className="section">
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        type: 'progressbar',
                    }}
                    modules={[Pagination]}
                    className="testimonial-slider"
                >

                    {testimonialData.testimonial.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-box">
                                <div className="testimonial-avatar">
                                    <Image src={item.avatar} alt={item.name} placeholder="blur" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="mb-3">
                                        <h3>{item.name}</h3>
                                        <span className="sm-heading text-white">{item.jobTitle}</span>
                                    </div>
                                    <p className="fs-4 fw-normal fst-italic line-height-140">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonial;
