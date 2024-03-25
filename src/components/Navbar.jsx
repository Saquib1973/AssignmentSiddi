import React, { useState } from 'react'
import test from "../imgs/test.png"
import { navbarLinks } from '../utils/NavigationUtil'
import { Link, Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
const Navbar = () => {
    const [mobileNav, SetMobileNav] = useState(false);
    return (
        <>

            <div className='sticky top-0 z-50 bg-white text-xl px-3 py-4 md:p-4 md:px-[10%] lg:px-[15%] flex items-center justify-between md:justify-around'>
                <Link to={'/'}><img src={test} alt="logo" className='h-12 w-12 rounded-md' /></Link>
                <div className={`flex justify-between px-10 2xl:px-[15%] w-[75%] max-md:hidden `}>

                    {
                        navbarLinks.map((navLink, i) => (
                            <Link to={navLink.href} key={i}>{navLink.name}</Link>
                        ))
                    }
                </div>
                <div className={`flex justify-around gap-6 bg-white flex-col items-center text-red top-0 py-10 left-0 absolute transition-all duration-500 ${mobileNav ? "translate-y-0" : " -translate-y-[100vh] "} w-full md:hidden `}>
                    <i className="absolute top-3 right-3 text-3xl fi fi-sr-circle-xmark" onClick={() => SetMobileNav(!mobileNav)} ></i>
                    {
                        navbarLinks.map((navLink, i) => (
                            <Link to={navLink.href} key={i}>{navLink.name}</Link>
                        ))
                    }
                </div>
                <div className='flex 2xl:px-[5%] w-[40%] md:w-[25%] justify-between items-center'>
                    <Link to={'/dashboard'} className='border-red border text-red hover:bg-red hover:text-white inline-block p-2 text-xs'>Dashboard</Link>

                    <i className="fi fi-rr-user"></i>
                    <i className="fi fi-rr-search"></i>
                    <i className="fi fi-rr-menu-burger md:hidden" onClick={() => SetMobileNav(!mobileNav)}></i>
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navbar