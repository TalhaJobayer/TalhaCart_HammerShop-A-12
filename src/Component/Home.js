import React from 'react';
import Banner from './Home/Banner/Banner';
import Products from './Home/Products/Products';
import Review from './Home/Review/Review';
import Summury from './Home/Summury/Summury';


const Home = () => {
    return (
        <div >
           <Banner></Banner>
          <div className='container'>
          <Products></Products>
          <Summury></Summury>
          <Review></Review>
         </div>

        </div>
    );
};

export default Home;