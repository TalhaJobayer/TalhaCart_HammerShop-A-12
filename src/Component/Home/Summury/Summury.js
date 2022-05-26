import React from 'react';

const Summury = () => {
    return (
        
        <div className='mt-5 mb-5 sm:w-50'>
            <div className='divider'></div>
            <div >
            <h1 className=' text-4xl md:text-4xl  lg:text-6xl text-sky-500 flex justify-center '>Trusted By Buyers From All Over 80 Countrys</h1>
            <div className='   lg:flex lg:justify-between' style={{marginLeft:'40px',marginRight:'40px'}}>
                <div className='mt-5'>
                    <h1 className=' text-5xl md:text-6xl lg:text-7xl text-blue-400 font-bold'>100%</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold'>Response</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl text-blue-400 font-bold'>24/7</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold'>Delivery</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-5xl md:text-6xl  lg:text-7xl text-blue-400 font-bold'>300K+</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold'>Buyer</h3>
                </div>
                

            </div>

        </div>
        <div className='divider mt-3'></div>
        </div>
    );
};

export default Summury;