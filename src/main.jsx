import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home_page/HomePage'
import LoginPage from './pages/login_page/Login'
import RegisterPage from './pages/register_page/Register'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/loginpage',
    element: <LoginPage/>
  },
  {
    path: '/registerpage',
    element: <RegisterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
