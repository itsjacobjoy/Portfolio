import React, { useEffect, useRef } from 'react'
import { blogData } from './BlogData'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blog = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    return (
        <div id="blog" className="section-box">
            <div className="section-sm bg-dark border-radius-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <span className="title-heading text-white-04">{blogData.mainData.title}</span>
                            <h1 className="display-3 fw-medium">{blogData.mainData.title2} <span className="text-gradient">{blogData.mainData.title2Span}</span></h1>
                            <p>{blogData.mainData.description}</p>
                            {/* Slider Nav */}
                            <div className="mt-4">
                                <button className="swiper-blog-prev button-circle cursor-link" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button className="swiper-blog-next button-circle cursor-link" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            {/* end Slider Nav */}
                        </div>
                    </div> {/* end row */}
                    <Swiper
                        onSwiper={(swiper) => {
                            sliderRef.current = swiper;
                            swiper.on('init', () => {
                                updateNavigation(swiper);
                            });
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="blog-slider mt-4 mt-lg-5"
                    >
                        {blogData.posts.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="blog-post-box">
                                    <div className="blog-post-img">
                                        {/* Image */}
                                        <a className="blog-post-img-link" href={`blog/${item.slug}`}>
                                            <Image src={item.mainImage} alt={item.title} placeholder="blur" />
                                        </a>
                                        {/* Category */}
                                        <div className="blog-post-category">
                                            <Link href={`blog/${item.slug}`}>
                                                <span data-text={item.category}>{item.category}</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="list-inline-dot sm-heading text-white mb-2">
                                            <li>
                                                <Link className="link-hover" href={`blog/${item.slug}`}>
                                                    <span data-text={`by ${item.postedBy}`}>by {item.postedBy}</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="link-hover" href={`blog/${item.slug}`}>
                                                    <span data-text="Oct 8">Oct 8</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h2 className="mb-0">
                                            <Link className="blog-caption" href={`blog/${item.slug}`}>
                                                <i className="bi bi-arrow-right"></i>
                                                {item.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> {/* end container */}
            </div>
        </div>
    )
}

export default Blog