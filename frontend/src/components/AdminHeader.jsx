import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Adminlogout } from "../redux/authSlice";

function AdminHeader() {
  const {adminInfo} = useSelector((state)=>state.auth)
  const [loading,setLoading]=useState()
  const dispatch=useDispatch()
  const direct=useNavigate()
  useEffect(()=>{
    if(!adminInfo){
      direct('/admin')
    }
  },[])
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
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
            <button
              onClick={()=>{dispatch(Adminlogout())}}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              disabled={loading}
            >
              {loading ? "Logging Out..." : "Log Out"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
