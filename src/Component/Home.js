import React from 'react';
import Banner from './Home/Banner/Banner';
import Products from './Home/Products/Products';
import Review from './Home/Review/Review';
import Summury from './Home/Summury/Summury';
import TopRatedProducts from './Home/TopRatedProducts/TopRatedProducts';


const Home = () => {
    return (
        <div >
           <Banner></Banner>
          <div className='container'>
          <Products></Products>
          <Summury></Summury>
          <TopRatedProducts></TopRatedProducts>
          <Review></Review>
         </div>

        </div>
    );
};

export default Home;