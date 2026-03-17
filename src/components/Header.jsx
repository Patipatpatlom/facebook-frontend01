import React from "react";
import useUserStore from "../stores/userStore";
import {
  FacebookLogo,
  FriendsIcon,
  HomeIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
  ShopIcon,
} from "../icons";
import { Link } from "react-router";

function Header() {
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);
  return (
    <div className="w-full flex gap-4 justify-between px-3 h-14 bg-white fixed top-0 z-10 shadow-lg">
      {/* Left side */}
      <div className="flex-1 flex gap-2 items-center pe-2 max-md:hidden">
        <FacebookLogo className="w-12" />
        <label className="input rounded-full">
          <input type="text" />
          <SearchIcon />
        </label>
      </div>
      {/* Navigation */}
      <div className="flex gap-2 justify-center pt-1  *:w-20 max-md:*:w-16 max-md:justify-start">
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <HomeIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <PlayIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <ShopIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <FriendsIcon className="w-1/2" />
        </Link>
      </div>
      {/* Right + Dropdown Menu */}
      <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
