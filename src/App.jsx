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
    path: '/LoginPage', // zmiana z '/loginpage' na '/LoginPage'
    element: <LoginPage/>,
    errorElement: <NotFoundPage/>

  },
  {
    path: '/RegisterPage', // zmiana z '/registerpage' na '/RegisterPage'
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