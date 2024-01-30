import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './contexts/App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './js/pages/Login.jsx';
import Signup from './js/pages/Signup.jsx';
import Try from './js/pages/Try.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, 
  {
    path:'/Login',
    element: <Login/>
  },
  {
    path:'/Signup',
    element: <Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
