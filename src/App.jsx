import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import "./App.css"
import Domains from './components/Domains';
import LeaderBoard from './components/LeaderBoard';

const router = createBrowserRouter (
  [
    {
      path : "/",
      element : <Homepage/>,
    },
    {
      path : "/about",
      element : <About/>,
    },
    {
      path : "/domains",
      element : <Domains/>,
    },
    {
      path : "/leader-board",
      element : <LeaderBoard/>
    }
  ]
);

function App() {
  return (
    <div>
      <RouterProvider router = {router}/> 
    </div>
  )
}

export default App