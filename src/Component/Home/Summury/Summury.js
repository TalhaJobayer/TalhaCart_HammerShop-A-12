import React from 'react';
import CountUp from 'react-countup';

const Summury = () => {
    return (
      
        

        <div className='m-3  sm:w-50' style={{backgroundColor:"white",borderRadius:"80px 5px"}}>
           
            <div >
            
            <h1 className='pt-5 text-2xl md:text-3xl   lg:text-4xl text-sky-500 flex justify-center text-center '>Trusted By Buyers From All Over 80 Countrys</h1>
            <div className='divider mt-3'></div>
            <div className='   lg:flex lg:justify-between' style={{marginLeft:'40px',marginRight:'40px'}}>
                <div className='mt-5'>
                    <h1 className=' text-3xl md:text-4xl lg:text-4xl text-blue-400 font-bold text-center'><CountUp end={100} duration={7} />%</h1>
                    <h3 className=' text-3xl  lg:text-4xl text-blue-400 font-bold text-center'>Response</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-4xl text-blue-400 font-bold text-center'><CountUp end={24} duration={4} />/<CountUp end={7} duration={4} /></h1>
                    <h3 className=' text-3xl md:text-4xl lg:text-4xl text-blue-400 font-bold text-center'>Delivery</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-4xl text-blue-400 font-bold text-center'><CountUp end={300} duration={7} />K+</h1>
                    <h3 className=' text-3xl  lg:text-4xl text-blue-400 font-bold text-center'>Buyer</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-4xl text-blue-400 font-bold text-center'><CountUp end={89400} duration={7} />+</h1>
                    <h3 className=' text-3xl  lg:text-4xl text-blue-400 font-bold text-center'>Total Page Views</h3>
                </div>
                

            </div>

        </div>
        <div className='divider mt-3'></div>
        </div>
       
    );
};

export default Summury;