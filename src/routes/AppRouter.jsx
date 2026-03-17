import { Component, lazy, Suspense } from "react";
// import Home from "@/pages/Home"
// import Frineds from "@/pages/Friends"
// import Login from "@/pages/Login"
// import Profile from '../pages/Profile'
import ShareInfo from "../pages/ShareInfo";
const Home = lazy(() => import("../pages/Home"));
const Friends = lazy(() => import("../pages/Friends"));
const Profile = lazy(() => import("../pages/Profile"));
const Login = lazy(() => import("../pages/Login"));
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import useUserStore from "../stores/userStore";
import UserLayout from "../layouts/UserLayout";


const commonPath = [{ path: "/share", Component: ShareInfo }];

const guestRouter = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "*", element: <Navigate to="/" /> },
  ...commonPath,
]);

const userRouter = createBrowserRouter([
  {
    path: "/",Component:UserLayout,
    children: [
      { index: true, Component: Home },
      { path: "friends", Component: Friends },
      { path: "profile", Component: Profile },
      { path: "*", element: <Navigate to="/" /> },
      ...commonPath,
    ],
  },
]);

function AppRouter() {
  const user = useUserStore(state => state.user)
  const finalRouter = user ? userRouter : guestRouter;
  return (
    <Suspense
      fallback={<span className="loading loading-spinner loading-xl"></span>}
    >
       <RouterProvider key={user?.id} router={finalRouter} />
    </Suspense>
  );
}
export default AppRouter;
