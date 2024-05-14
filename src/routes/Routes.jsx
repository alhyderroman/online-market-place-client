import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index:true,
        element:<Home></Home>,
        // loader:()=>fetch(`${import.meta.env.VITE_API_URL}/jobs`),
        // loader:()=>fetch('http://localhost:9000/jobs')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Register></Register>
      },
      {
        path:'/jobDetail/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/jobDetail/${params.id}`),
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path:'/add-job',
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:'/myPostedJobs',
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:'/myBids',
        element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path:'/bidRequests',
        element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      },
      {
        path:'/jobs',
        element:<AllJobs></AllJobs>
      }
     
    ]
    },
  ]);

  export default router;