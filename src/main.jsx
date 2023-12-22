import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TaskUpdate from './Components/Dashboard/SeePreviousTasks/TaskUpdate';
import FeedBack from './Components/FeedBack/FeedBack';
import CreateFeedback from './Components/FeedBack/CreateFeedback';

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
        path:"/feedback",
        element:<PrivateRoute><FeedBack/></PrivateRoute>
      },
      {
        path:"/createfeedback",
        element:<PrivateRoute><CreateFeedback/></PrivateRoute>
      },
      
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:
        [
          {
            path:'/dashboard',
            element:<PrivateRoute><DashboardImg/></PrivateRoute>
          },
          {
            path:"/dashboard/createnewtasks",
            element:<PrivateRoute><CreateNewTasks/></PrivateRoute>
          },
          {
            path:"/dashboard/seeprevioustasks",
            element:<PrivateRoute><SeePrevioustaks/></PrivateRoute>
          },
          {
            path:`/dashboard/taskupdate/:id`,
            element:<PrivateRoute><TaskUpdate/></PrivateRoute>
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
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider> 
</AuthProvider>
  </React.StrictMode>,
)
