import React from 'react'
import Image from 'next/image'
import { aboutData } from './AboutData';
import Link from 'next/link';

const About = () => {
    return (
        <div className="container">
            <div className="row g-4 g-md-5">
                <div className="col-12 col-lg-4 order-lg-2 text-center">
                    {/* Hero Avatar */}
                    <div className="hero-avatar">
                        <Image src={aboutData.mainData.heroAvatar} alt="hero avatar" placeholder="blur" />
                    </div>
                    {/* end Hero Avatar */}
                </div>
                <div className="col-12 col-lg-4 order-lg-1">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-md-4 col-lg-12">
                            <h6 className="sm-heading">Biography</h6>
                            <p>{aboutData.mainData.biography}</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-12">
                            <h6 className="sm-heading">Skills</h6>
                            <ul className="list-inline-dot">
                                {aboutData.skills.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-12">
                            <h6 className="sm-heading">Connect</h6>
                            <ul className="list-inline">
                                {aboutData.connect.map((item, index) => (
                                    <li key={index}>
                                        <Link className="button-circle button-circle-sm" href={item.url} aria-label="Social media link">
                                            <i className={item.bootstrapIcon}></i>
                                            <i className={item.bootstrapIcon}></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> {/* end row(inner) */}
                </div>
                <div className="col-12 col-md-12 col-lg-4 order-lg-3 text-lg-end">
                    <div className="row g-4 g-lg-5">
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Projects Done</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.projectsDone}</h1>
                        </div>
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Years of Experience</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.yearsOfExperience}+</h1>
                        </div>
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Worldwide Clients</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.worldwideClients}</h1>
                        </div>
                    </div> {/* end row(inner) */}
                </div>
            </div> {/* end row */}
        </div>
    )
}

export default About