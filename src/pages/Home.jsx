import React, { useState } from 'react'
import trendingImg from "../imgs/test.png";
import { Link } from 'react-router-dom';
import { news } from "../utils/NewsUtil"
const Home = () => {
    const [newsSection, SetNewsSection] = useState('latest');

    return (
        <div className='bg-grey px-2 md:px-10 lg:px-[10%] xl:px-[18%] flex flex-col gap-16'>
            {/* Header / Trending Section */}
            <div className='flex max-lg:flex-col gap-4 justify-between items-center pt-8'>
                <img src={trendingImg} alt="trending news" className='w-[80%] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] p-1 object-contain aspect-video' />
                <div className='p-4 w-full flex-col flex gap-4'>
                    <div className='flex justify-between'>

                        <p className='text-red font-medium'>
                            Trending
                        </p>
                        <div className='flex gap-4'>
                            <i className="fi fi-rr-heart"></i>
                            <i className="fi fi-rr-paper-plane"></i>
                            <i className="fi fi-rr-bookmark"></i>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-3xl font-semibold'>
                            Cake meme reflects coronavirus absurdity in a world where nothing is what it seems
                        </p>
                        <p>
                            Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”
                            <Link className='inline-block text-black/60' to={`/news/34lkmn59b31jik`}>read more...</Link>
                        </p>
                        <div className='flex gap-4 pl-4 text-xs'>
                            <p className='text-black/60'>2 hours ago</p>
                            <p className='text-black/40'>By Lucy Hiddleston  |  4min read</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Flash News Section */}
            <div className='bg-red  flex justify-center items-center p-2 py-4 md:p-4 gap-4 md:gap-10 text-white'>
                <div className='bg-white text-xs sm:text-lg text-red p-2 md:p-4 inline-block'>Breaking News</div>
                <p className='text-xs sm:text-lg'>Kanye West says he's running for president in 2020.</p>
            </div>
            {/* Feed Section */}
            <div className='flex max-md:flex-col-reverse gap-8 relative'>
                {/* Left */}
                <div className='w-full md:w-[70%]'>
                    <nav className='bg-white flex gap-4 justify-start p-3'>
                        <p className={`font-semibold border-b-4 ${newsSection === 'latest' ? " border-red" : "border-transparent"} cursor-pointer`} onClick={() => SetNewsSection('latest')}>Latest Stories</p>
                        <p className={`font-semibold border-b-4 ${newsSection === 'think' ? " border-red" : "border-transparent"} cursor-pointer`} onClick={() => SetNewsSection('think')}>Think</p>
                        <p className={`font-semibold border-b-4 ${newsSection === 'health' ? " border-red" : "border-transparent"} cursor-pointer`} onClick={() => SetNewsSection('health')}>Health</p>
                        <i className="fi fi-rr-layout-fluid ml-auto"></i>
                    </nav>
                    <div className='mt-4 flex flex-wrap gap-x-4 gap-5 md:gap-y-10 justify-between'>
                        {
                            news.filter(newz => newz.tag === newsSection).map((ne, i) => {
                                return (
                                    <Link to={`/news/${ne.id}`} className='w-full sm:w-[48%]'>

                                        <NewsLayout key={i} img={trendingImg} heading={ne.heading} summary={ne.summary} time={ne.time} author={ne.author} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='w-full flex justify-center'>

                        <button className='border border-red text-red p-4 my-6'>View More</button>
                    </div>
                </div>
                {/* Right */}
                <div className='w-full md:w-[30%] flex flex-col gap-4 md:sticky md:top-20 md:h-[70vh]'>
                    <p className='text-red'>Live</p>
                    <div className='flex flex-col gap-2'>
                        <img src={trendingImg} alt="trending" className='object-contain w-full' />
                        <p className='font-medium'>Beloved Arizona coach loses battle with coronavirus</p>
                    </div>
                    <div className='flex flex-col gap-4 mt-5 border-t pt-5 border-black/40'>
                        <p className='text-lg font-medium'>Location News</p>
                        <div className='bg-white p-4 flex flex-col gap-4 py-6 justify-center items-start'>
                            <label>Get location specific news</label>
                            <input className='bg-none outline-1 outline text-sm w-full md:p-3 p-2 outline-black/40' type="text" placeholder='Enter Your Location' />
                            <button className='bg-red text-white p-2 px-4'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Editors Choice */}
            <div className='pb-10 pt-4'>
                <p className='font-medium text-lg mb-4'>Editor's Picks</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <EditorChoiceLayout img={trendingImg} heading={'John Lewis to make final journey across Edmund Pettus Bridge in procession'} summary={'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.'} />
                    <EditorChoiceLayout img={trendingImg} heading={'John Lewis to make final journey across Edmund Pettus Bridge in procession'} summary={'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.'} />


                </div>
            </div>

        </div >
    )
}

export default Home

export const NewsLayout = ({ img, heading, summary, time, author }) => {
    return (
        <div className='flex flex-col bg-white h-full justify-between'>
            <img src={img} alt="" className='aspect-video object-contain w-80 mx-auto md:w-full' />
            <div className='px-6 py-2 flex flex-col gap-3'>

                <p className='font-semibold'>{heading}</p>
                <p className='text-sm'>{summary}</p>
                <p className='text-black/60 flex gap-2 md:gap-4'><span className='text-black/40'>
                    {time}

                </span>
                    {author}
                </p>
            </div>
            <div className='flex justify-around border-t gap-4 py-2'>
                <i className="fi fi-rr-heart"></i>
                <i className="fi fi-rr-paper-plane"></i>
                <i className="fi fi-rr-bookmark"></i>
            </div>
        </div>
    )
}
export const EditorChoiceLayout = ({ img, heading, summary }) => {
    return (
        <div className='flex'>
            <div className='relative'>
                <img src={img} alt="" className='aspect-video object-contain w-96' />
                <div className='flex absolute bottom-0 left-4 justify-around gap-4 py-2'>
                    <i className="fi fi-rr-heart"></i>
                    <i className="fi fi-rr-paper-plane"></i>
                    <i className="fi fi-rr-bookmark"></i>
                </div>
            </div>
            <div className='px-6 py-2 flex flex-col gap-3'>

                <p className='font-semibold'>{heading}</p>
                <p className='text-sm'>{summary}</p>
            </div>

        </div>
    )
}