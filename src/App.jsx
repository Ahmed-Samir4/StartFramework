import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';

let routers =createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>}
    ]}
])
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}


