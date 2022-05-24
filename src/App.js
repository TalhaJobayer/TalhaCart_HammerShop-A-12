
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home';
import Navabar from './Component/Home/Navabar/Navabar';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Productdetails from './Component/Productdetails/Productdetails';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import SignUp from './Component/SignUp/SignUp';
import Footer from './Component/Footer/Footer'
import AllProducts from './Component/AllProducts/AllProducts';
import AddProduct from './Component/AddProduct/AddProduct';
import PurchaseInfo from './Component/Productdetails/PurchaseInfo/PurchaseInfo';


function App() {
  return (
   
       <div  >
         <Navabar></Navabar>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/Dashboard' element={
             <RequireAuth>
               <Dashboard></Dashboard>
             </RequireAuth>
           }></Route>
           <Route path='/hammer/:id' element={
             <RequireAuth>
               <Productdetails></Productdetails>
             </RequireAuth>
           }></Route>
           <Route path='/purchaseInfo' element={
             <RequireAuth>
               <PurchaseInfo></PurchaseInfo>
             </RequireAuth>
           }></Route>
           <Route path='/MyProducts' element={<AllProducts></AllProducts>}></Route>
           <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
           <Route path='/logIn' element={<Login></Login>}></Route>
           <Route path='/signUp' element={<SignUp></SignUp>}></Route>
           <Route path='*' element={<NotFound></NotFound>}></Route>

         </Routes>
         <Footer></Footer>
         
          
      
       </div>
      
    
  );
}

export default App;
