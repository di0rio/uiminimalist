import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from "./pages/App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import User from './routes/User/User';
import Home from './routes/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      { path: "/", element: <Home /> },
      { path: "sobre", element: <User /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
