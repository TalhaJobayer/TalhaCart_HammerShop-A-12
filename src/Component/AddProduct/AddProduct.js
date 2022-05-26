import React from 'react';

const AddProduct = () => {
   


    const handleAddProduct=(event)=>{
        event.preventDefault()
        const name=event.target.Name.value
        const image=event.target.Image.value
        const description=event.target.Description.value
        const price=event.target.Price.value
        const quantity=event.target.Quantity.value
        const NewProduct={name,image,description,price,quantity}
        console.log(NewProduct);

        fetch(`https://guarded-lake-94958.herokuapp.com/products`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(NewProduct) 
    
        })
        .then(res=>res.json())
       .then(data=>{
        alert('added succesfully')
        event.target.reset()
      console.log('Success:', data);
      
    })

    }

      
       
      

    
       
    return (
        <div className=' flex justify-center m-3 '>
            <div style={{width:'50%'}} className="card bg-base-100 shadow-5xl ">
  
  <div className="card-body ">
    
  <form onSubmit={handleAddProduct} >
  <h2 className='text-xl'>Name:</h2>
   <input name='Name' type="text" placeholder="Product Name" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Image:</h2>
   <input name='Image' type="text" placeholder="Product Image" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Description:</h2>
   <input name='Description' type="text" placeholder="Product Description" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Price:</h2>
   <input  name='Price' type="text" placeholder="Product Price" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Quantity:</h2>
   <input  name='Quantity' type="text" placeholder="Product Quantity" className="input input-bordered input-warning w-full max-w-xl" required/>
  <div className='flex justify-center mt-2'>
  <button type='submit' className="btn btn-outline btn-info ">Add Now</button>
  </div>
  </form>
   
  
    
  </div>
</div>
        </div>
    );
};

export default AddProduct;