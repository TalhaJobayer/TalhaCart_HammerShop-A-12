import React from 'react';
import MenuLogo from '../../../Images/kisspng-electricity-computer-icons-symbol-company-electric-electric-5abdc00c68c5a8.0630823215223849084292.jpg'

const Footer = () => {
    return (
        <div>
            
<footer className="text-center text-lg-start bg-light text-muted mt-0">

  <section className="">
    <div className="container text-center text-md-start ">
      
      <div className="row pt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
          <img className='logo' src={MenuLogo} alt="" /> Electro House
          </h6>
          <p>
            Here you can buy any kind of Gadgets
          </p>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>Headphones</p>
          <p>  Powerbank</p>
          <p>  Tablet</p>
          <p>Laptop</p>
        </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p> Pricing </p>
          <p>Settings </p>
          <p> Orders </p>
          <p> Help</p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p> Joypurhat sadar,Rajshahi,bangladesh</p>
          <p>
            
            Talhajobayer8@gmail.com
          </p>
          <p> 017***********</p>
          <p> 017***********</p>
        </div>
        
      </div>
      
    </div>
  </section>

  <div className="text-center p-4"  style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright: TALHA JOBAYER
  </div>
  
</footer>

        </div>
    );
};

export default Footer;