import React from 'react';
import Banner from './Home/Banner/Banner';
import Products from './Home/Products/Products';


const Home = () => {
    return (
        <div >
           <Banner></Banner>
          <div className='container'>
          <Products></Products>
          </div>

        </div>
    );
};

export default Home;