
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

import MyOrder from './Component/Dashboard/MyOrder/MyOrder';
import ManageUser from './Component/Dashboard/ManageUser/ManageUser';
import MyProfile from './Component/Dashboard/MyProfile/MyProfile';
import AddReview from './Component/Dashboard/AddReview/AddReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Component/RequireAdmin/RequireAdmin';


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
           }>
             <Route index  element={<MyOrder></MyOrder>}></Route>
             <Route  path='manageUser' element={<RequireAdmin><ManageUser></ManageUser></RequireAdmin>}></Route>
             <Route  path='MyProfile' element={<MyProfile></MyProfile>}></Route>
             <Route  path='AddReview' element={<AddReview></AddReview>}></Route>
             <Route  path='AllProduct' element={<AllProducts></AllProducts>}></Route>
           </Route>
           <Route path='/hammer/:id' element={
             <RequireAuth>
               <Productdetails></Productdetails>
             </RequireAuth>
           }></Route>
           
          
           <Route path='/addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
           <Route path='/logIn' element={<Login></Login>}></Route>
           <Route path='/signUp' element={<SignUp></SignUp>}></Route>
           <Route path='*' element={<NotFound></NotFound>}></Route>

         </Routes>
         <ToastContainer />
         <Footer></Footer>
         
          
      
       </div>
      
    
  );
}

export default App;
