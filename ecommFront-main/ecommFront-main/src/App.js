import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Dashboard from './view/Dashboard';
import Login from './view/Login';
import Reg from './view/Reg';
import AdminRouter from "./privateRoute/PrivateRoute";
import CouponList from './component/admin/CouponList';
import AddCoupon from './component/admin/AddCoupon';
import EditCoupon from './component/admin/EditCoupon';

import ManageVitalList from './component/admin/ManageVitalList';
import AddVital from './component/admin/AddVital';

import Test from './component/test';


export default function App() {
  const auth = useSelector(state=>state.auth);
  console.log(auth)
    const navigate = useNavigate();
    useEffect(() => {
      if(auth?.authenticate){
      navigate("/home");
    } 
    }, [auth])
  return (
    <div> 
       <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/reg" element={<Reg/>}/>
         <Route path="/home" element={<AdminRouter redirectTo="/"><Dashboard/></AdminRouter>}/>
         <Route path="/managepatent" element={<AdminRouter redirectTo="/"><CouponList/></AdminRouter>}/>
         <Route path="/addpatent" element={<AdminRouter redirectTo="/"><AddCoupon/></AdminRouter>}/>
         
         <Route path="/editpatent/:role/:userId/:couponId" element={<AdminRouter redirectTo="/"><EditCoupon/></AdminRouter>}/>

         <Route path="/managevital" element={<AdminRouter redirectTo="/"><ManageVitalList/></AdminRouter>}/>
         <Route path="/addvital" element={<AdminRouter redirectTo="/"><AddVital/></AdminRouter>}/>

         <Route path="/test" element={<AdminRouter redirectTo="/"><Test/></AdminRouter>}/>
       </Routes>
   </div>
  )
}

 