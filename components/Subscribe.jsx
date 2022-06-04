import React, { useState } from 'react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function Subscribe() {

    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Id, setId] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Country, setCountry] = useState();
    const [Referal, setReferal] = useState();

    return (
        <div className="bg-black min-h-screen min-w-screen flex justify-center items-center flex-col pb-10 px-4">
            <div
                style={{ height: "100px" }}
                className="w-full flex justify-center md:justify-end items-center"
            >
                <div className="buttons flex justify-center items-center h-full md:mr-12">
                    <Link href={'/login'} >
                        <a>
                            <button
                                type="button"
                                className="btnn bg-gradient-to-r from-gradBtnFrom to-gradBtnTo py-3 hover:from-gradBtnTo hover:to-gradBtnFrom text-white capitalize text-lg flex justify-center items-center rounded-xl w-32 mr-6 drop-shadow font-primary"
                            >
                                Login
                            </button>
                        </a>
                    </Link>
                    <Link href={'/signup'} >
                        <a>
                            <button
                                type="button"
                                className="btnn bg-gradient-to-r from-gradBtnFrom to-gradBtnTo py-3 hover:from-gradBtnTo hover:to-gradBtnFrom text-white capitalize text-lg flex justify-center items-center rounded-xl w-32 drop-shadow font-primary"
                            >
                                Sign Up
                            </button>
                        </a></Link>
                </div>
            </div>
            <form method='POST' style={{ minHeight: 'calc(100vh - 100px)' }} className="flex justify-center items-center flex-col bottom-div mt-20 md:mt-8" >
                <div className="w-28 h-28 md:h-40 md:w-40" >
                    <img style={{ width: '100%' }} src="/assets/logo.png" alt="" />
                </div>
                <h2 className='font-primary text-greenish md:text-xl capitalize mt-3' >sefapool 3D app backOffice</h2>
                <input value={FirstName} onChange={(e) => setFirstName(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-12 AddBorder placeholder-greenish' placeholder='First name' />
                <input value={LastName} onChange={(e) => setLastName(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Last name' />
                <input value={Email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Email address' />
                <input value={Id} onChange={(e) => setId(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Id' />
                <input value={Country} onChange={(e) => setCountry(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Country' />
                <input value={Phone} onChange={(e) => setPhone(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Phone No' />
                <input value={Referal} onChange={(e) => setReferal(e.target.value)} autoComplete='off' autoCorrect='off' type="text" className='w-full outline-none text-greenish font-primary mt-6 AddBorder placeholder-greenish' placeholder='Referall Link' />
                <button
                    type="button"
                    className="btnn bg-gradient-to-r from-gradBtnFrom to-gradBtnTo py-6 hover:from-gradBtnTo hover:to-gradBtnFrom text-white capitalize text-lg flex justify-center items-center rounded-xl w-full drop-shadow font-primary mt-10 font-bold"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Subscribe;