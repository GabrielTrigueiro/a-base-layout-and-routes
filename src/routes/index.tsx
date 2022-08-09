import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home, Login } from '../pages';
import { Layout } from "../shared/layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Layout/>}>
            <Route path='dashboard' element={<Home/>}/>
          </Route>
          <Route path='/' element={<Navigate replace to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  )
}
