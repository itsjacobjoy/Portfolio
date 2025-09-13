import React from 'react';
import { portfolioData } from './PortfolioData';

const Portfolio = () => {
  return (
    <div id="use-cases" className="section-box">
      <div className="section-sm bg-dark border-radius-1">
        <div className="container">
          <div className="row">
            {/* Left-aligned heading */}
            <div className="col-12">
              <span className="title-heading text-white-04 d-block text-start">
                {portfolioData.mainData.title}
              </span>
              <h1 className="display-3 fw-medium text-start">
                {portfolioData.mainData.title2}{' '}
                <span className="text-gradient">
                  {portfolioData.mainData.title2Span}
                </span>
              </h1>
              {portfolioData.mainData.description && (
                <p className="text-start">{portfolioData.mainData.description}</p>
              )}
            </div>
          </div>

          {/* Use Cases grid */}
          <div className="usecases-grid mt-4 mt-lg-5">
            {portfolioData.useCases.map((item, idx) => (
              <div className="usecase-card" key={idx}>
                <div className="usecase-front">
                  <h3 className="sm-heading text-white m-0">{item.title}</h3>
                </div>
                <div className="usecase-back">
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>{/* end container */}
      </div>
    </div>
  );
};

export default Portfolio;
