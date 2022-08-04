import React from 'react';

const Summury = () => {
    return (
        
        <div className='m-3  sm:w-50' style={{backgroundColor:"black",borderRadius:"80px 5px"}}>
           
            <div >
            <h1 className='pt-5 text-4xl md:text-4xl   lg:text-6xl text-sky-500 flex justify-center text-center '>Trusted By Buyers From All Over 80 Countrys</h1>
            <div className='   lg:flex lg:justify-between' style={{marginLeft:'40px',marginRight:'40px'}}>
                <div className='mt-5'>
                    <h1 className=' text-5xl md:text-6xl lg:text-7xl text-blue-400 font-bold text-center'>100%</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold text-center'>Response</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl text-blue-400 font-bold text-center'>24/7</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold text-center'>Delivery</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-5xl md:text-6xl  lg:text-7xl text-blue-400 font-bold text-center'>300K+</h1>
                    <h3 className=' text-3xl lg:text-5xl text-blue-400 font-bold text-center'>Buyer</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-5xl md:text-6xl  lg:text-7xl text-blue-400 font-bold text-center'>89,400+</h1>
                    <h3 className=' text-xl lg:text-5xl text-blue-400 font-bold text-center'>Total Page Views</h3>
                </div>
                

            </div>

        </div>
        <div className='divider mt-3'></div>
        </div>
    );
};

export default Summury;