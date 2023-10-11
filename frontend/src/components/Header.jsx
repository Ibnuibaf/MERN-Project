import { current } from "@reduxjs/toolkit";
import React, { useEffect, useNavigate } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(()=>{
    console.log(userInfo)
  },[])
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src="http://localhost:3333/images/diary-png.png"
              className="mr-3 h-6 sm:h-14"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Diary Keeper
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {userInfo ? (
              <div className="flex">
                <Link
                  to={"/diary"}
                  className="flex items-center gap-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  My Diary
                </Link>

                <Link
                  to={"/profile"}
                  className="flex items-center gap-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <img
                    src={userInfo.profile}
                    alt=""
                    className="h-9 w-9 rounded-full"
                  />
                  {userInfo.username.toUpperCase()}
                </Link>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
