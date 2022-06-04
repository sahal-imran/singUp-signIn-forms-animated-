import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import Link from 'next/link';



function WithBothLoginSignUp() {
    return (
        <div className='bg-gray-800 min-h-screen min-w-screen flex justify-center items-center px-4' >
            <div className='PopDiv bg-black flex justify-center items-center flex-col lg:flex-row AddBorderIcon drop-shadow-xl overflow-hidden' >
                <div className='leftDiv flex justify-center items-center flex-col w-full h-2/4 lg:h-full lg:w-3/5' >
                    <h2 className='font-primary text-greenish text-2xl md:text-3xl capitalize font-semibold absolute top-3 left-3' >sefaPool refferal</h2>
                    <h2 className='font-primary text-greenish text-3xl md:text-5xl capitalize font-bold' >Sign In to Account</h2>
                    <div className='w-12 bg-white h-1 mt-2 border-2 border-greenish' ></div>
                    <div className='icons flex justify-center items-center mt-16 mb-8' >
                        <BsFacebook className='icon text-4xl text-greenish cursor-pointer' />
                        <BsGoogle className='icon mx-8 text-4xl text-greenish cursor-pointer' />
                        <BsTwitter className='icon text-4xl text-greenish cursor-pointer' />
                    </div>
                    <Link href={'/login'} >
                        <a className='decoration-none text-xl md:text-3xl text-greenish' >
                            or use your email account
                        </a>
                    </Link>
                </div>
                <div className='rightDiv flex justify-center items-center flex-col w-full h-2/4 lg:w-2/5  lg:min-h-full bg-gradient-to-r from-greenish to-connectBtnTo md:bg-' >
                    <h2 className='font-primary text-white text-3xl md:text-5xl capitalize font-bold text-center' >Hello Friend!</h2>
                    <div className='w-12 bg-connectBtnTo h-1 mt-2 border-2 border-white' ></div>
                    <h2 className='font-primary text-white text-xl md:text-3xl capitalize font-light text-center mt-8' >Fill up personal information and start journey</h2>
                    <Link href={'/signup'} >
                        <a>
                            <button
                                type="button"
                                class="text-white font-bold text-xl px-16 py-3 border-4 rounded-full border-white drop-shadow font-primary mt-4"
                            >
                                Sign Up
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WithBothLoginSignUp;