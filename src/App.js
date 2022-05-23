
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home';
import Navabar from './Component/Home/Navabar/Navabar';
import Productdetails from './Component/Productdetails/Productdetails';


function App() {
  return (
   
       <div className='App' >
         <Navabar></Navabar>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
           <Route path='/hammer/:id' element={<Productdetails></Productdetails>}></Route>
         </Routes>
          
      
       </div>
      
    
  );
}

export default App;
