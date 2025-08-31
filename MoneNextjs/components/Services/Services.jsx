import React from 'react'
import { servicesData } from './ServicesData'

const Services = () => {
    return (
        <div id="services" className="section">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">{servicesData.mainData.title}</span>
                        <h1 className="display-3 fw-medium mb-0">{servicesData.mainData.title2} <span className="text-gradient">{servicesData.mainData.title2Span}</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4">
                            {servicesData.services.map((item, index) => (
                                <div key={index} className="col-12">
                                    <div className="service-box">
                                        <div className="service-order">
                                            <h3>{item.number}/</h3>
                                        </div>
                                        <div className="service-title">
                                            <i className={item.bootstrapIcon}></i>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="service-text">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* end Service box 3 */}
                        </div> {/* end row(inner) */}
                    </div>
                </div> {/* end row */}
            </div> {/* end container */}
        </div>
    )
}

export default Services