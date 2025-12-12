import React, { useState } from 'react';
import './App.css';
import RatePage from './Component/RatePage/RatePage';
import RequestForm from './Component/RequestForm/RequestForm';
import Home from "./Component/Home/Home";
import Landing from "./Component/Landing/Landing";
import Layout from './Component/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from './Component/Notfound/Notfound';
import ManageUser from './Component/ManageUser/ManageUser';
import SignIn from './Component/Sign/SignIn';
import SignUp from './Component/Sign/SignUp';

export default function App() {
  const [user, setUser] = useState(null); // المستخدم الحالي
  const [users, setUsers] = useState([]); // كل الحسابات المسجلة

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} />,  // Navbar + Footer
      children: [
        { index: true, element: <Landing /> },
        { path: 'home', element: <Home /> },
        { path: 'ratepage', element: <RatePage /> },
        { path: 'requestform', element: <RequestForm /> },
        { path: 'manageuser', element: <ManageUser /> },
        { path: '*', element: <Notfound /> },
      ]
    },
    { path: 'signin', element: <SignIn setUser={setUser} users={users} /> },
    { path: 'signup', element: <SignUp setUser={setUser} users={users} setUsers={setUsers} /> },
  ]);

  return <RouterProvider router={routers} />;
}
