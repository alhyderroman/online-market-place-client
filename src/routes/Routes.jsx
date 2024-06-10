import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ClassDetails from "../pages/ClassDetails/ClassDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import MyBookings from "../pages/Dashboard/Guest/MyBookings";
import MyEnrollClassDetails from "../pages/ClassDetails/MyEnrollClassDetails";
import AddClass from "../pages/Dashboard/Host/AddClass";
import MyListings from "../pages/Dashboard/Host/MyListings";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/class/:id',
        element: <ClassDetails/> 
      },
    ]
  },
  { path: '/login', element: <Login/> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: ( <DashboardLayout /> ),
    children: [
      // {
      //   index: true,
      //   element: (
      //     <PrivateRoute>
      //       <Statistics />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: 'add-class',
        element: <AddClass />  
      },
      // {
      //   path:'teacher-request',
      //   element:<TeacherRequest></TeacherRequest>
      // },
      {
        path: 'my-listings',
        element: 
              <MyListings />
           
      },
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <AdminRoute>
      //         <ManageUsers />
      //       </AdminRoute>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: 'my-bookings',
        element: <MyBookings />
      },
      {
        path: 'my-enroll-class-details/:id',
        element:<MyEnrollClassDetails/>
      }
      // {
      //   path: 'manage-bookings',
      //   element: (
      //     <PrivateRoute>
      //       <HostRoute>
      //         <ManageBookings />
      //       </HostRoute>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'profile',
      //   element: (
      //     <PrivateRoute>
      //       <Profile />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;