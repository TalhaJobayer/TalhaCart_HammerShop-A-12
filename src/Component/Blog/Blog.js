import React from 'react';

const Blog = () => {
    return (
        <div className='Conatiner m-10'>
            <h1 className='text-4xl mb-3  '>1.How will you improve the performance of a React Application?</h1>
            <p className='text-xl'> <b>Answer:</b> Keeping component state local where necessary.
Memoizing React components to prevent unnecessary re-renders.
Code-splitting in React using dynamic import() .
Windowing or list virtualization in React.
Lazy loading images in React.</p>
            <h1 className='text-4xl mb-3  '>2.What are the different ways to manage a state in a React application?</h1>
            <p className='text-xl'> <b>Answer:</b>
               <ol>
                   <li>these are the ways to manage a state in areact component</li>
                   <li>1. Data State</li>
                   <li>2. Control State</li>
                   <li>3. Session State</li>
                   <li>4. Location State</li>
               </ol>
            
            </p>
            <h1 className='text-4xl mb-3  '>3.How does prototypical inheritance work?</h1>
            <p className='text-xl'> <b>Answer:</b> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>

            <h1 className='text-4xl mb-3  '>4. Why you do not set the state directly in React?</h1>
            <p className='text-xl'> <b>Answer:</b>
            If i update it directly, calling the setState() afterward may just replace the update i made.and i will lose control of the state across all components.
            </p>
            <h1 className='text-4xl mb-3  '>5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p className='text-xl'> <b>Answer:</b>
            i will create an api which sends to backend  dynamic query from front end and
            in dynamic query  i will send product name dynamicaly from searchInput .this how i will implement a search to find products by name.
            </p>
            <h1 className='text-4xl mb-3  '>6. What is a unit test? Why should write unit tests?</h1>
            <p className='text-xl'> <b>Answer:</b>
            Unit tests help to find and fix bugs earlier.
            write a test before implementing a feature, is that writing the unit tests in a manner that is consistent with the requirements is a good way of understanding the requirements and breaking them down. this is why we should write unit tests
            </p>
            
        </div>
    );
};

export default Blog;