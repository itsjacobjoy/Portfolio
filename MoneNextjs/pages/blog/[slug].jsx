import React, { useState } from 'react'
import { Lightbox } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';

const PostPage = ({ post, prevPost, nextPost }) => {
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

    // Get the last word from post.title
    const lastWord = getLastWord(post.title);

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords} />
            </Head>

            <main>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <h1 className="display-3 fw-medium">{post.title.replace(lastWord, '')} <span className="text-gradient">{lastWord}</span></h1>
                                <p>{post.description}</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-5">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Category:</h6>
                                    <ul className="list-inline-dot">
                                        <li>
                                            {post.category}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Posted by:</h6>
                                    <p>{post.postedBy}</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Tags:</h6>
                                    <ul className="list-inline-dot">
                                        {post.tags.map((item, index) => (
                                            <li key={index}>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">Posted on:</h6>
                                    <p>{post.date}</p>
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
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                            </div> {/* end row */}
                            {/* Project Media */}
                            <div className="row g-4 g-lg-5 mt-1">
                                <div className="col-12">
                                    <Image className="border-radius" src={post.mainImageWide} alt={post.title} placeholder="blur" />
                                </div>
                                {/* Images Lightbox */}
                                {post.images.map((item, index) => (
                                    <div key={index} className="col-12 col-md-6">
                                        <div onClick={() => openLightbox(item.image)}>
                                            <div className="lightbox-image-box border-radius">
                                                <Image src={item.image} alt={post.title} placeholder="blur" />
                                                <div className="lightbox-icon">
                                                    <i className="bi bi-arrows-fullscreen"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row mt-5">
                                    {prevPost ? (
                                        <div className="col-6">
                                            <Link href={`/blog/${prevPost.slug}`} className="button">
                                                <span data-text="Prev Post">Prev Post</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="col-6">
                                            <button className="button btn-disabled" disabled>
                                                <span data-text="Prev Post">Prev Post</span>
                                            </button>
                                        </div>
                                    )}
                                    {nextPost ? (
                                        <div className="col-6 text-end">
                                            <Link href={`/blog/${nextPost.slug}`} className="button">
                                                <span data-text="Next Post">Next Post</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="col-6 text-end">
                                            <button className="button btn-disabled" disabled>
                                                <span data-text="Next Post">Next Post</span>
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
    // Generate paths for all your blog posts
    const paths = blogData.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog post with the matching slug
    const post = blogData.posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    const currentIndex = blogData.posts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogData.posts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogData.posts.length - 1 ? blogData.posts[currentIndex + 1] : null;

    return {
        props: {
            post,
            prevPost,
            nextPost,
        },
    };
}


export default PostPage