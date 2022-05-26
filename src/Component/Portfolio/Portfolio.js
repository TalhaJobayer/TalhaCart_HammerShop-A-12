import React from 'react';
import photo from '../../Image/IMG_20200702_024444_108.jpg'

const Portfolio = () => {
    return (
        <div className='flex  container mt-5 mb-5'>
           <div className=''>
               <img  className="w-20 md:w-32 lg:w-48"src={photo} alt="" />
           </div>
           <div className='ml-10 mt-2'>
               <div className='flex'>
                   <div className='mr-10 '>
                       <h1 className='text-4xl'>Myself</h1>
                       <div className="divider"></div>
                             <h2  className='text-2xl'><b>Name:</b> Talha Jobayer</h2>
                             <h2  className='text-2xl'><b>Email:</b> Talhajobayer@gmail.com</h2>
                             <h2  className='text-2xl'><b>Address:</b> Joypurhat sadar,Joypurhat</h2>

                   </div>
                   <div className='ml-12 '>
                   <h1 className='text-4xl'>Professional Experience</h1>
                       <div className="divider"></div>
                             <h2  className='text-2xl'><b>Web Development </b></h2>
                             <h2  className='text-2xl'><b>Web Desighn</b></h2>

                             <h1 className='text-3xl mt-2 FONT-BOLD'>Comfortable With : </h1>
                             
                             <h2  className='text-xl ml-2'><b>HTML,CSS,BOOTSRAP,TAILWIND</b></h2>
                             <h2  className='text-xl ml-2'><b>MONGODB,EXPRESS,REACT,NODE</b></h2>

                   </div>
                   

               </div>
               <div className='flex'>
                   <div className='mr-10 mt-5'>
                   <h1 className='text-4xl'>Education</h1>
                       <div className="divider"></div>
                             <h2  className='text-2xl'><b>College:</b> Joypurhat Gov't College</h2>
                             <h2  className='text-2xl'><b>Class:</b> Honourse In Depertment Of Mathemetics</h2>
                   </div>
                   <div className=' mt-5'>
                   
                   </div>
                   

               </div>
              
               
           </div>
        </div>
    );
};

export default Portfolio;