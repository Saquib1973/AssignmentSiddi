import React from 'react'
import { footerLinks } from '../utils/NavigationUtil'
import { Link } from 'react-router-dom'
import img from "../imgs/404.png"

const Footer = () => {
    return (
        <div className='bg-[#0E1E32] text-white md:px-[20%] py-10 max-md:flex-col-reverse max-md:gap-8 items-center flex justify-between w-full'>
            <div className='flex flex-col items-center gap-4'>
                <img src={img} alt="footer" className='w-20' />
                <p>copyright &#169; 2020 | News4U NEWS</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>

                    {
                        footerLinks.map((footer, i) => (
                            <Link to={footer.href} key={i}>{footer.name}</Link>
                        ))
                    }
                </div>
                <div className='flex gap-4 mx-auto md:ml-auto'>
                    <i className=" text-2xl fi fi-brands-twitter"></i>
                    <i className=" text-2xl fi fi-brands-reddit"></i>
                    <i className=" text-2xl fi fi-brands-facebook"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer