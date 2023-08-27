import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Friends from './Components/Friends/Friends.jsx';
import Friend from './Components/Friend/Friend.jsx';
import Profile from './Components/Profile/Profile.jsx';
import ProfileDetails from './Components/PropfileDetails/ProfileDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'friends',
        element : <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path :'profile/:friendsId',
        element: <Profile></Profile>,
        // loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
      },
      {
        path:'posts',
        element : <Posts></Posts>,
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "/app",
    element: <App></App>,
  }
]); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
