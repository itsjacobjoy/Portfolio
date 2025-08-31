import React, { useState } from 'react'
import { Lightbox } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/components/Portfolio/PortfolioData';

const ProjectPage = ({ project, prevProject, nextProject }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const getLastWord = (str) => {
        const words = str.split(' ');
        return words[words.length - 1];
    };

    // Get the last word from project.title
    const lastWord = getLastWord(project.title);

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords} />
            </Head>

            <main>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <h1 className="display-3 fw-medium">{project.title.replace(lastWord, '')} <span className="text-gradient">{lastWord}</span></h1>
                                <p>{project.description}</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-5">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Services:</h6>
                                    <ul className="list-inline-dot">
                                        {project.services.map((item, index) => (
                                            <li key={index}>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Client:</h6>
                                    <p>{project.client}</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Project link:</h6>
                                    <Link className="link-hover" href={project.projectLink.url}>
                                        <span data-text={project.projectLink.title}>{project.projectLink.title}</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Duration:</h6>
                                    <p>{project.duration}</p>
                                </div>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>

                <div className="section-box">
                    <div className="section-sm bg-dark border-radius-1">
                        <div className="container">
                            {/* Text */}
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                                </div>
                            </div> {/* end row */}
                            {/* Project Media */}
                            <div className="row g-4 g-lg-5 mt-1">
                                <div className="col-12">
                                    <Image className="border-radius" src={project.mainImageWide} alt={project.title} placeholder="blur" />
                                </div>
                                {/* Images Lightbox */}
                                {project.images.map((item, index) => (
                                    <div key={index} className="col-12 col-md-6">
                                        <div onClick={() => openLightbox(item.image)}>
                                            <div className="lightbox-image-box border-radius">
                                                <Image src={item.image} alt={project.title} placeholder="blur" />
                                                <div className="lightbox-icon">
                                                    <i className="bi bi-arrows-fullscreen"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row mt-5">
                                    {prevProject ? (
                                        <div className="col-6">
                                            <Link href={`/portfolio/${prevProject.slug}`} className="button">
                                                <span data-text="Prev Project">Prev Project</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="col-6">
                                            <button className="button btn-disabled" disabled>
                                                <span data-text="Prev Project">Prev Project</span>
                                            </button>
                                        </div>
                                    )}
                                    {nextProject ? (
                                        <div className="col-6 text-end">
                                            <Link href={`/portfolio/${nextProject.slug}`} className="button">
                                                <span data-text="Next Project">Next Project</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="col-6 text-end">
                                            <button className="button btn-disabled" disabled>
                                                <span data-text="Next Project">Next Project</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div> {/* end container */}
                        </div>
                    </div>
                </div>
                {lightboxImage && (
                    <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                )}
            </main>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog project
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog project with the matching slug
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    const currentIndex = portfolioData.projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioData.projects.length - 1 ? portfolioData.projects[currentIndex + 1] : null;

    return {
        props: {
            project,
            prevProject,
            nextProject,
        },
    };
}


export default ProjectPage