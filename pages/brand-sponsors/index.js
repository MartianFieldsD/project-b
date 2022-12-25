import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function BrandSponsors(props) {
    return (
        <div className={`w-screen h-max py-6 px-6 md:px-24 flex flex-col justify-center items-center bg-borabayImpureWhite border gap-8`} id='brand-sponsors'>
            <span className='self-center md:self-start text-borabayBrown font-normal text-2xl sm:text-3xl font-archane'>Founders</span>
            <div className='w-full h-[40%] flex flex-row justify-between items-center flex-wrap-reverse sm:flex-nowrap gap-6 sm:gap-0'>
                <span className='w-full sm:w-[50%] text-borabayDarkBrown font-normal font-playfairdisplay text-lg sm:text-xl text-center sm:text-left'>Borabay is the brainchild of USA return Dr. Anu Karjela, who has 20+ years of experience in the medical world. She is an ardent observer of cosmetic treatments encouraged around the globe and aims to introduce the best salon experience in the Indian market through her new venture.</span>
                <div className='w-full sm:w-[40%] h-[100%] flex justify-center'>
                    <Image className='rounded-xl' src={require('../../public/icons/girl-in-sofa.JPG')} height={350} width={300} alt='girl-in-sofa' />
                </div>
            </div>
            <span className='text-borabayBrown font-normal text-2xl sm:text-3xl font-archane'>{"Partnered with the World’s Best Brands"}</span>
            <div className='w-full lg:my-8 flex flex-row justify-evenly items-center flex-wrap md:flex-nowrap gap-12'>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-01@2x.svg')} height={100} width={100} alt='loreal-logo' />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-02@2x.svg')} height={100} width={100} alt='kerastase-logo' />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-03@2x.png')} height={100} width={100} alt='casmara-logo' />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-04@2x.png')} height={100} width={100} alt='shankara-logo' />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-05@2x.png')} height={100} width={100} alt='dyson-logo' />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center'>
                    <Image src={require('../../public/brand-logos/logo-06@2x.png')} height={100} width={100} alt='rl-logo' />
                </div>
            </div>
        </div>
    );
}

export default BrandSponsors;
