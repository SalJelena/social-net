import React from 'react';
import bannerImg from "../../assets/banner-img.png"

function Home() {
    return (

            <div className='container mx-auto px-4 py-4 lg:px-0 sm:px-6 md:px-8 w-full max-w-[1370px]'>
                <div className='px-4'>
                    <img src={bannerImg} alt='Banner image representing social media networking' className='w-full rounded-2xl'/>
                    <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">New posts every day</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Gainings by Ads</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">New users annually</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
                        </div>
                        </dl>
                    </div>
                </div>
            </div>
            </div>
            

  


    );
}

export default Home;
