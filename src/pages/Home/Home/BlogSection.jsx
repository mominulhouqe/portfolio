import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);


const BlogSection = () => {
  const blogItems = [
    {
      title: 'Education: A Podpourri of Learning Options: Pods',
      image: 'https://i.ibb.co/r72xf0J/my-img7.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula ac ante scelerisque eleifend.',
      date: 'April 15, 2023',
      views: 1000,
      tags: ['Education', 'Learning'],
      author: {
        name: 'John Doe',
        bio: 'Passionate educator and lifelong learner',
        avatar: 'https://i.ibb.co/2MhTqj1/avatar.jpg',
      },
    },
    {
      title: 'Exploring the World of Online Education',
      image: 'https://i.ibb.co/7XXJCgb/my-imgf01.webp',
      content: 'Fusce sed neque ac massa luctus elementum eu vel eros. Integer in consectetur mi, vitae consequat ipsum.',
      date: 'May 5, 2023',
      views: 500,
      tags: ['Education', 'Online Learning'],
      author: {
        name: 'Jane Smith',
        bio: 'Passionate advocate for accessible education',
        avatar: 'https://i.ibb.co/0Xs0fFJ/avatar.jpg',
      },
    },
    {
      title: 'The Power of Lifelong Learning',
      image: 'https://i.ibb.co/3r1fTmX/my-imgf05.webp',
      content: 'Curabitur blandit, sapien vel convallis pretium, sapien tellus commodo mi, in egestas odio ligula vel ipsum.',
      date: 'Jun 12, 2023',
      views: 750,
      tags: ['Education', 'Lifelong Learning'],
      author: {
        name: 'David Johnson',
        bio: 'Advancing education through technology',
        avatar: 'https://i.ibb.co/hg4PwYF/avatar.jpg',
      },
    },
    {
      title: 'Unlocking Your Potential Through Education',
      image: 'https://i.ibb.co/KN6CJ1P/my-imgf06.webp',
      content: 'Pellentesque tincidunt lectus in fringilla consectetur. Etiam tincidunt tellus eget tempor consequat.',
      date: 'July 1, 2023',
      views: 1200,
      tags: ['Education', 'Personal Growth'],
      author: {
        name: 'Sarah Thompson',
        bio: 'Inspiring individuals to embrace lifelong learning',
        avatar: 'https://i.ibb.co/fnQ7Xd7/avatar.jpg',
      },
    },
    {
      title: 'The Future of Education: Technology and Innovation',
      image: 'https://i.ibb.co/1n164tQ/my-imgf04.webp',
      content: 'Suspendisse vitae ipsum vitae arcu sodales placerat. Nullam vitae aliquet magna, eu scelerisque turpis.',
      date: 'Aug 3, 2023',
      views: 900,
      tags: ['Education', 'Technology'],
      author: {
        name: 'Michael Brown',
        bio: 'Exploring the intersection of education and technology',
        avatar: 'https://i.ibb.co/3dKxxqJ/avatar.jpg',
      },
    },
  ];
  

  return (
    <section className="bg-[#FDF8F7] py-10">
    <div className="container mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-2">From My Blog</h3>
        <p className="text-gray-600 mb-3">Our Recent Updates, Blog, Tips, Tricks & More</p>
        <hr className="border-gray-400" />
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {blogItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Fade direction="up" delay={index * 100}>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-wrap justify-center items-center">
                <img
                  className="rounded-lg h-48 w-96 mb-4 lg:mr-6"
                  src={item.image}
                  alt="Blog Image"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaEye className="mr-2" />
                    <p>{item.views}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src={item.author.avatar}
                      alt="Author Avatar"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.author.name}</p>
                      <p className="text-xs text-gray-600">{item.author.bio}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-semibold inline-block mt-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
};

export default BlogSection;
