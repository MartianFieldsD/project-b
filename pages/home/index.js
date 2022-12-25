import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from '../../src/components/modal';

function Home(props) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className={`relative w-screen h-screen flex flex-col sm:pt-0 sm:justify-center items-center bg-borabayLightBrown overflow-y-hidden`} id='home' >
            <div className='absolute w-[60px] h-[45px] top-5 left-5 flex justify-center items-center lg:hidden'>
                <Image className='w-full h-full' src={require('../../public/icons/Logo.png')} alt='Logo' />
            </div>
            <button className='absolute top-5 right-5 lg:hidden' onClick={() => { setOpenMenu(true) }}>
                <Image src={require('../../public/icons/ham-menu.png')} height={25} width={40} alt='ham-menu' />
            </button>
            {openMenu && <Modal onCloseClick={setOpenMenu} />}
            <div className='w-[70%] sm:w-[400px] pt-[100px] flex flex-col lg:mr-0 justify-center items-center gap-2
            mobile:mr-[8%] tablet:mr-[12%] airpad:mr-[15%] mobile:self-center tablet:self-center airpad:self-center
            laptop:self-center desktop:self-center'>

                {/* <div className='w-[100%] sm:w-[400px] pt-[100px] flex flex-col md:mr-[15%] sm:mr-[8%] lg:mr-0 justify-center sm:self-end lg:self-center items-center gap-2'> */}
                <span className={`text-borabayDarkBrown font-normal text-lg sm:text-xl text-center font-montserrat`}>Experience Beauty In-Depth  at</span>
                <span className={`text-borabayBrown font-normal text-3xl sm:text-7xl font-higuen`}>Borabay</span>
                <span className={`text-borabayBrown text-lg sm:text-xl sm:tracking-[.60em] font-hindguntur`}>THE SALON</span>
                <span className={`text-borabayDarkBrown font-normal text-lg sm:text-xl text-center font-montserrat`}>Where nature and science interact to concept encompassing beauty solutions</span>
                <div className='pt-[100px] hidden lg:flex flex-col items-center justify-center gap-2'>
                    <span className={`text-borabayBrown font-normal text-xl font-montserrat`}>Scroll</span>
                    <Image src={require('../../public/icons/down_arrow.png')} height={70} width={70} alt='Down-Arrow' />
                </div>
            </div>
            <div id="leftImg" className='absolute mobile:-z-1 left-0 bottom-0 mobile:opacity-50 tablet:opacity-0 airpad:opacity-0
            mobile:top-[0px]'>
                <Image src={require('../../public/icons/green-leafed-girl.png')}

                    alt='green-leafed-girl' />
                {/* <img src='../../public/icons/green-leafed-girl.png' style={{ height: '100px', width: '100px' }} alt='green-leafed-girl' /> */}
            </div>
            <div id="rightImg" className='absolute right-0 bottom-0 hidden sm:flex mobile:opacity-50 tablet:opacity-50 airpad:opacity-50'>
                <Image src={require('../../public/icons/white-top-girl.png')} height={700} width={370}

                    alt='white-top-girl' />
            </div>
            {/* <div className='absolute bottom-0 flex sm:hidden'>
                <Image src={require('../../public/icons/white-top-girl-uncroped.png')} height={300} width={270} alt='white-top-girl-uncroped' />
            </div> */}
            {/* <div className='absolute right-0 bottom-[0px] top-[0px] w-[100%] h-[100%] lg:hidden opacity-[0.4]'>
                <Image src={require('../../public/icons/green-leafed-girl.png')} alt='green-leafed-girl'
                    fill sizes="(max-width: 768px) 100vw, (max-width: 992px) 75vw, (max-width: 1200px) 50vw, 33vw" />
                
            </div> */}
        </div >
    );
}

export default Home;
