import { Component, lazy, Suspense } from "react";
// import Home from "@/pages/Home"
// import Frineds from "@/pages/Friends"
// import Login from "@/pages/Login"
// import Profile from '../pages/Profile'
import ShareInfo from "../pages/ShareInfo"; 
const Home = lazy( ()=> import('../pages/Home'))
const Friends = lazy (()=>import('../pages/Friends'))
const  Profile= lazy (()=>import('../pages/Profile'))
const Login = lazy (()=>import('../pages/Login'))
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router";


const commonPath = [
  { path : '/share', Component: ShareInfo}
]

const guestRouter = createBrowserRouter([
  { path: "/", Component : Login },
  { path: "*", element: <Navigate to="/" /> },
  ...commonPath
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="py-4 border">Header</div>
        
        <Outlet />
      </>
    ),
    children: [
      { index: true, Component : Home },
      { path: "friends", Component : Friends },
      { path: "profile", Component : Profile },
      { path: "*", element: <Navigate to="/" /> },
      ...commonPath
    ],
  },
]);

function AppRouter() {
    // const user = null
    const user = { email : "andy@ggg.mail"}
    const finalRouter = user ? userRouter : guestRouter
  return (
 <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <RouterProvider router={finalRouter} />
 </Suspense>
)
}
export default AppRouter;
