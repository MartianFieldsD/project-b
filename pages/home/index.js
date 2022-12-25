import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from '../../src/components/modal';

function Home(props) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className={`relative w-screen h-screen flex flex-col justify-center items-center bg-borabayLightBrown`} id='home' >
            <div className='z-10 absolute w-[60px] h-[45px] top-5 left-5 flex justify-center items-center lg:hidden'>
                <Image className='w-full h-full' src={require('../../public/icons/Logo.png')} alt='Logo' />
            </div>
            <button className='absolute top-5 right-5 lg:hidden' onClick={() => { setOpenMenu(true) }}>
                <Image src={require('../../public/icons/ham-menu.png')} height={25} width={40} alt='ham-menu' />
            </button>
            {openMenu && <Modal onCloseClick={setOpenMenu} />}
            <div className='z-10 w-[70%] sm:w-[400px] flex flex-col sm:mr-[8%] lg:mr-0 justify-center sm:self-end lg:self-center items-center gap-2'>
                <span className={`text-borabayDarkBrown font-normal text-lg sm:text-xl text-center font-montserrat`}>Experience Beauty In-Depth  at</span>
                <span className={`text-borabayBrown font-normal text-3xl sm:text-7xl font-higuen`}>Borabay</span>
                <span className={`text-borabayBrown text-lg sm:text-xl sm:tracking-[.60em] font-hindguntur`}>THE SALON</span>
                <span className={`text-borabayDarkBrown font-normal text-lg sm:text-xl text-center font-montserrat`}>Where nature and science interact to concept encompassing beauty solutions</span>
                <div className='pt-[100px] hidden lg:flex flex-col items-center justify-center gap-2'>
                    <span className={`text-borabayBrown font-normal text-xl font-montserrat`}>Scroll</span>
                    <Image src={require('../../public/icons/down_arrow.png')} height={70} width={70} alt='Down-Arrow' />
                </div>
            </div>
            <div className='absolute left-0 bottom-0 h-[70%] w-[50%] hidden sm:flex items-end'>
                <Image src={require('../../public/icons/green-leafed-girl.png')} height={650} width={370} alt='green-leafed-girl' />
                {/* <img src='../../public/icons/green-leafed-girl.png' style={{ height: '100px', width: '100px' }} alt='green-leafed-girl' /> */}
            </div>
            <div className='absolute right-0 -bottom-[0px] hidden lg:flex'>
                <Image src={require('../../public/icons/white-top-girl.png')} height={700} width={370} alt='white-top-girl' />
            </div>
            <div className='absolute left-0 bottom-0 flex sm:hidden blur-sm'>
                <Image src={require('../../public/icons/green-leafed-girl.png')} alt='green-leafed-girl' />
            </div>
        </div >
    );
}

export default Home;
