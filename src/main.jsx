import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardImg from './Components/Dashboard/DashboardImg';
import CreateNewTasks from './Components/Dashboard/CreateNewTasks/CreateNewTasks';
import SeePrevioustaks from './Components/Dashboard/SeePreviousTasks/SeePrevioustaks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:
    [
      {
        path:'/',
        element:<Home/>

      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
        children:
        [
          {
            path:'/dashboard',
            element:<DashboardImg/>
          },
          {
            path:"/dashboard/createnewtasks",
            element:<CreateNewTasks/>
          },
          {
            path:"/dashboard/seeprevioustasks",
            element:<SeePrevioustaks/>
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>  
        <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
