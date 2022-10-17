import React from 'react';
import Banner from './Home/Banner/Banner';
import Carosel from './Home/Carosel/Carosel';
import ContactUs from './Home/ContactUs/ContactUs';
import Products from './Home/Products/Products';
import Review from './Home/Review/Review';
import Summury from './Home/Summury/Summury';
import TopRatedProducts from './Home/TopRatedProducts/TopRatedProducts';


const Home = () => {
    return (
        <div >
            <Carosel></Carosel>
           <Banner></Banner>
          <div className='container'>
          <Products></Products>
          </div>
          <Summury></Summury>
          <ContactUs></ContactUs>
          <div className='container'>
          
          <TopRatedProducts></TopRatedProducts>
          <Review></Review>
         
         </div>

        </div>
    );
};

export default Home;