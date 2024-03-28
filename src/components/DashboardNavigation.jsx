import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardNavigation = () => {
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <div className='flex bg-grey'>
            {/* SideBar */}
            <div className={`flex z-50 flex-col py-10 px-6 transition-all sticky top-0 left-0  bg-blue text-white/80 justify-evenly md:justify-between max-md:py-28 h-[100vh]  md:h-screen ${mobileNav === false ? "max-md:-translate-x-[50vw]" : "max-md:translate-x-0"} max-md:fixed  max-md:top-0 max-md:left-0 `}>
                <div className='absolute md:hidden p-1 rounded-full px-2 top-0 -right-4 cursor-pointer flex items-center justify-center'>
                    {/* <i className=" fi fi-rr-angle-small-right"></i> */}
                    <i className="absolute top-0 right-0 text-3xl fi fi-sr-circle-xmark text-red bg-white flex items-center justify-center rounded-full" onClick={() => setMobileNav(!mobileNav)} ></i>

                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <i className="text-xl fi fi-rr-gift-card"></i>
                    <i className="text-xl fi fi-rs-shopping-cart"></i>
                    <i className="text-xl fi fi-rr-cube"></i>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>

                    <i className="text-xl fi fi-rr-bookmark"></i>
                    <i className="text-xl fi fi-rr-chart-histogram"></i>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>

                    <i className="text-xl fi fi-rr-user"></i>
                    <i className="text-xl fi fi-rr-settings hover:bg-red hover:text-white bg-white text-black flex items-center justify-center p-2 rounded-md"></i>
                </div>
            </div>
            <div className='w-full'>
                {/* TopBar */}

                <div className='flex gap-2 md:gap-4 bg-white w-full justify-between px-4 md:px-8 p-3 items-center'>
                    <i className="fi fi-rr-menu-burger md:hidden" onClick={() => setMobileNav(!mobileNav)}></i>
                    <div className='flex gap-4 md:gap-6 justify-around'>
                        <input type="text" placeholder='Search' className='bg-grey/60 p-2 md:p-4 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] rounded-md text-sm md:text-lg' />
                        <input type="date" placeholder='Date' className='bg-grey/60 p-2 md:p-4 rounded-md max-sm:w-[80px] text-sm md:text-lg' />
                    </div>
                    <div className='flex gap-4 justify-around'>
                        <i className="text-xl fi fi-rr-envelope"></i>
                        <i className="text-xl fi fi-rs-bell"></i>
                        <p className='max-md:hidden'>Saquib Ali</p>

                    </div>
                </div>
                {/* Content */}
                <div>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default DashboardNavigation