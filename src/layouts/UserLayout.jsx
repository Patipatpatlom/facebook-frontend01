import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

function UserLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative pt-14 flex gap-2 bg-base-100 border">
      <Outlet />
    </div>
    </div>
  );
}

export default UserLayout;
