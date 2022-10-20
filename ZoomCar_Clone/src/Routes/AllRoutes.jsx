import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Components/Landing'
import { Login } from '../Pages/Login'
import BecomeHost from "../Pages/BecomeHost";
import { Policies } from '../Pages/Policies';
import { ReferEarn } from '../Pages/ReferEarn';
import { Faqs } from '../Pages/Faqs';
import { Contact } from '../Pages/Contact';
import { HostPolicy } from '../Pages/HostPolicy';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/bah' element={ <BecomeHost/> }/>
        <Route path='/policy' element={<Policies/>}/>
        <Route path='/refer' element={<ReferEarn/>}/>
        <Route path='/faq' element={<Faqs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hostpo' element={<HostPolicy/>}/>

    </Routes>
  )
}
