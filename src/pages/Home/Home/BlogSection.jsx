import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BlogSection = () => {
    const blogItems = [
        {
            title: 'Education: A Podpourri of Learning Options: Pods',
            image: 'https://i.ibb.co/r72xf0J/my-img7.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula ac ante scelerisque eleifend.',
            date:'April 15, 2023'
        },
        {
            title: 'Exploring the World of Online Education',
            image: 'https://i.ibb.co/7XXJCgb/my-imgf01.webp',
            content: 'Fusce sed neque ac massa luctus elementum eu vel eros. Integer in consectetur mi, vitae consequat ipsum.',
            date:'May 5, 2023'
        },
        {
            title: 'The Power of Lifelong Learning',
            image: 'https://i.ibb.co/3r1fTmX/my-imgf05.webp',
            content: 'Curabitur blandit, sapien vel convallis pretium, sapien tellus commodo mi, in egestas odio ligula vel ipsum.',
            date:'Jun 12, 2023'
        },
        {
            title: 'Unlocking Your Potential Through Education',
            image: 'https://i.ibb.co/KN6CJ1P/my-imgf06.webp',
            content: 'Pellentesque tincidunt lectus in fringilla consectetur. Etiam tincidunt tellus eget tempor consequat.',
            date:'July 1, 2023'
        },
        {
            title: 'The Future of Education: Technology and Innovation',
            image: 'https://i.ibb.co/1n164tQ/my-imgf04.webp',
            content: 'Suspendisse vitae ipsum vitae arcu sodales placerat. Nullam vitae aliquet magna, eu scelerisque turpis.',
            date:'Aug 3, 2023'
        },
        {
            title: 'The Role of Education in Shaping Society',
            image: 'https://i.ibb.co/HTtph5B/my-imgf03.webp',
            content: 'Vestibulum non lacus a urna bibendum volutpat eu sit amet est. Sed at feugiat velit.',
            date:'Sept 4, 2023'
        },
    ];


    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">From My Blog</h3>
                    <p className="text-gray-600">Our Recent Updates, Blog, Tips, Tricks & More</p>
                </div>

                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    emulateTouch={true}
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay={true}
                    interval={5000}
                    transitionTime={500}
                >
                    {blogItems.map((item, index) => (
                        <div>
                            <h2 className="text-3xl font-semibold text-center mb-8">{item.date}</h2>
                            <div key={index} className="flex flex-col md:flex-row items-center gap-8">

                                <div className="w-full md:w-1/2">
                                    <img
                                        className="rounded-lg h-64 w-full object-cover"
                                        src={item.image}
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.content}</p>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 font-semibold"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default BlogSection;
