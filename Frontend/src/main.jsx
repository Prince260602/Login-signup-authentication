import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Registration from './component/Registration/Registration.jsx'
import Login from './component/Registration/Login.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProfilePage from './component/profile/ProfilePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/">
      <Route path="" element={<App />}/>
      <Route path="registration" element={<Registration />}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<ProfilePage/>}/>
      
    </Route>
  )
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
