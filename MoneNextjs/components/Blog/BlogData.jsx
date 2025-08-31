import PostImage from '@/public/images/blog-img.jpg'
import MainImage from '@/public/images/blog-img-wide.jpg';
import Image from '@/public/images/blog-img.jpg';

export const blogData = {
    mainData: {
        title: "Journal",
        title2: "Blog",
        title2Span: "Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    posts: [
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Oct 8',
            postedBy: 'Admin',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag 1' },
                { name: 'Tag 2' },
                { name: 'Tag 3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Oct 8',
            postedBy: 'Admin',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag 1' },
                { name: 'Tag 2' },
                { name: 'Tag 3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Oct 8',
            postedBy: 'Admin',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag 1' },
                { name: 'Tag 2' },
                { name: 'Tag 3' }
            ]
        },
    ],

};