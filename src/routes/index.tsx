import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
