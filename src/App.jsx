import React from 'react'
import HomePage from './pages/home_page/HomePage'
import LoginPage from './pages/login_page/Login'
import RegisterPage from './pages/register_page/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: 'loginpage',
      element: <LoginPage/>,
      errorElement: <NotFoundPage/>
  
    },
    {
      path: 'registerpage',
      element: <RegisterPage/>,
      errorElement: <NotFoundPage/>
  
    }
  ])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;