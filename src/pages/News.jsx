import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import image from "../imgs/test.png"
import { news } from "../utils/NewsUtil"

const News = () => {
    const location = useLocation().pathname.split('/')[2];
    const [selectedNews, setSelectedNews] = useState({
        heading: '',
        author: '',
        time: '',
        summary: '',
        detail: ''
    });
    useEffect(() => {
        const selected = news.find(item => {
            return item.id == location;
        });
        setSelectedNews(selected);
    }, [location]);
    return (
        <div className='bg-grey'>
            {/* Banner Section */}
            <div className='bg-blue py-4'>
                <p className='text-white flex justify-center pt-5 text-2xl font-semibold tracking-wider w-full'>{selectedNews.heading}</p>
                <img src={image} alt="banner" className='h-52 aspect-video object-contain translate-y-16' />
            </div>
            {/* News Section */}
            <div className='max-w-7xl py-24 mx-auto flex max-md:px-6 max-md:flex-col justify-between gap-4 relative'>
                {/* Left */}
                <div className='md:w-[60%]'>
                    <div className='flex gap-2'>
                        <p className='text-black/40'>{selectedNews.time} ago</p>
                        <p className='text-black/40'>By {selectedNews.author}</p>
                    </div>
                    <div>
                        <p className=' leading-8 tracking-wider text-xl flex flex-col gap-8'>
                            {selectedNews.detail}
                            {selectedNews.detail}
                            <img src={image} alt="banner" />
                            {selectedNews.detail}
                        </p>
                    </div>
                    {/* Comment Section */}
                    <div className=' py-8'>
                        <div className='flex justify-between pb-6 border-b-2 border-black/40'>
                            <div className='flex gap-8'>
                                <i className="text-2xl fi fi-rr-comment-alt-middle"></i>
                                <i className="text-2xl fi fi-rr-heart"></i>
                            </div>

                            <div className='flex gap-8'>
                                <i className="text-2xl fi fi-rr-paper-plane"></i>
                                <i className="text-2xl fi fi-rr-bookmark"></i>
                                <i className="text-2xl fi fi-rr-menu-dots"></i>
                            </div>
                        </div>
                        <div className='py-8 flex gap-6 justify-between'>
                            <img src={image} className='rounded-full h-16 w-16 bg-red aspect-auto object-fill' alt="author" />
                            <div>
                                <p className='text-black/60'>Author</p>
                                <p className='text-xl font-medium'>{selectedNews.author}</p>
                                <p>
                                    {selectedNews.author} is an award-winning social activist and founder of <span className='text-red'>The Valuable 500</span>, a global movement aimed at getting 500 companies to commit to disability inclusion.
                                </p>
                            </div>
                            <div>
                                <button className='border-red border px-3 py-2 text-red flex items-center justify-center gap-4 hover:bg-red hover:text-white'>
                                    <i className="fi fi-brands-twitter"></i>
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className='md:w-[40%] pl-10 flex flex-col gap-4 md:h-[70vh] sticky top-20'>
                    <p className='font-semibold'>Recommended For You</p>
                    <div className='bg-white px-4 py-8 flex items-center flex-col'>
                        <img src={image} alt="" />
                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas consequuntur quo dolore, dignissimos voluptates reiciendis? Nihil animi numquam omnis?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
