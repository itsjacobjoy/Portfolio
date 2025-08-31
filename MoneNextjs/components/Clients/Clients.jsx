import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { clientsData } from './ClientsData'
import Image from 'next/image';
import Link from 'next/link';

const Clients = () => {
    return (
        <div className="section pt-0">
            <div className="container">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="clients-swiper"
                >
                    {clientsData.clients.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="client-box">
                                <Link href={item.url}>
                                    <Image src={item.logo} alt={index} placeholder="blur" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Clients