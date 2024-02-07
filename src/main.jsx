import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Home Components/Home"
import Login from './Login Components/Login'
import Watchlist from './Watchlist Components/Watchlist'
import Register from './Register Components/Register'
import Navbar from "./Navbar"
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/watchlist',
        element: <Watchlist />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Register />
      },
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
