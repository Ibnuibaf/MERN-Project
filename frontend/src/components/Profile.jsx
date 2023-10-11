import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [loading,setLoading]=useState()
  // const direct= useNavigate()
  const dispatch=useDispatch()
  return (
    <>
      <div className="flex justify-end p-5 lg:order-2">
        <button
          onClick={()=>{dispatch(logout())}}
          className="px-40 bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          disabled={loading}
        >
          {loading ? "Logging Out..." : "Log Out"}
        </button>
      </div>
      <main
        className="flex justify-center items-center text-white"
        style={{ height: "90vh" }}
      >
        <div className="p-3 border-2" style={{ width: "20rem" }}>
          <div className="flex justify-center ">
            <img
              src={userInfo.profile}
              alt=""
              className="h-52 w-52 rounded-[70%]"
            />
          </div>
          <form encType="multipart/form-data">
            <h4 className="text-center font-bold mb-3">PROFILE</h4>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              value={userInfo.username}
              // onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              value={userInfo.email}
              // onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="Update Password">Update Password</label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New Password"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm New Password"
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="mt-4">
              <label htmlFor="Profile image">Update Profile image</label>
              <input
                className="form-control my-2"
                type="file"
                name="image"
                // onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              UPDATE USER
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
