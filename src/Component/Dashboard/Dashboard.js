import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <div className='flex justify-between'>
    <div>
    <h2 className='text-4xl  font-bold text-black-500'>Wellcome To DashBoard</h2>
    </div>
   <div className='flex justify-end'>
   <label for="dashboard-drawer" className="btn btn-primary drawer-button  lg:hidden">Drawer</label>
   </div>
    </div>
    <Outlet></Outlet>
    {/* <!-- Page content here --> */}
    
  
  </div> 
  <div className="drawer-side">
    <label for="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/Dashboard">My Order</Link></li>
      <li><Link to="/Dashboard/manageUser">Manage User </Link></li>
      <li><Link to="/Dashboard/MyProfile">My Profile </Link></li>
      <li><Link to="/Dashboard/AddReview">Add A Review</Link></li>
     
    </ul>
  
  </div>
  
</div>

    );
};

export default Dashboard;