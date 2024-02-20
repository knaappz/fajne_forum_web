import React from 'react'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/Login'
import RegisterPage from './pages/Register/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/LoginPage',
    element: <LoginPage/>,
    errorElement: <NotFoundPage/>

  },
  {
    path: '/RegisterPage', 
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