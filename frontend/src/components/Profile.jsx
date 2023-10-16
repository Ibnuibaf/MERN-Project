import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setCredentials } from "../redux/authSlice";
import { toast } from "react-toastify";
import axios from "axios";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(userInfo);
  const [image, setImage] = useState();
  console.log(userInfo, formData);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  const direct = useNavigate();
  const dispatch = useDispatch();

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }

    if (formData.username.length < 3) {
      toast.error("Enter a valid name");
    } else if (!isValidEmail(formData.email)) {
      toast.error("Enter a valid email");
    } else {
      setLoading(true);
      try {
        if (image) {
          const profileUpload = new FormData();
          profileUpload.append("file", image);
          profileUpload.append("upload_preset", "usctrur2");
          // setFormData({ ...formData, profile: userInfo.profile });
          try {
            await axios
              .post(
                `https://api.cloudinary.com/v1_1/dshijvj8y/image/upload`,
                profileUpload,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then((res) => {
                console.log("Its upload success");
                if (res.status === 200) {
                  setFormData({
                    ...formData,
                    profile: `${res.data.secure_url}`,
                  });
                  console.log(res.data.secure_url);
                  console.log(formData, "This is the actual one");
                } else {
                  setLoading(false);
                  // setFormData(userInfo)
                  console.error("Error uploading image to Cloudinary");
                  toast.error(error);
                }
              })
              .catch((err) => {
                setLoading(false);
                // setFormData(userInfo)
                console.error("Error uploading image:", err);
                toast.error(err);
              });
          } catch (error) {
            setLoading(false);
            // setFormData(userInfo)
            console.error("Error uploading image:", error);
          }
        }
        axios
          .post("http://localhost:3333/update-profile", formData)
          .then((res) => {
            setLoading(false);
            if (res.data.err) {
              setError(res.data.message);
              toast.error(error);
            } else {
              setError(null);
              toast.success("User Details Updated SuccessFully");
              dispatch(setCredentials(res.data));
              direct("/profile");
            }
          })
          .catch((err) => {
            setLoading(false);
            setFormData(userInfo);
            setError(err.response.data.message);
            toast.error(error);
            console.log(err);
          });
      } catch (err) {
        setLoading(false);
        // Set the error message state with the error message from the backend
        setError(err);
        // Display the error message in a toast notification
        toast.error(error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-end p-5 lg:order-2">
        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="px-40 bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          { "Log Out"}
        </button>
      </div>
      <main
        className="flex justify-center items-center text-white"
        style={{ height: "90vh" }}
      >
        <div className="p-3 border-2" style={{ width: "20rem" }}>
          <div className="flex justify-center ">
            <img
              src={formData.profile ? formData.profile : userInfo.profile}
              alt=""
              className="h-52 w-52 rounded-[70%]"
            />
          </div>
          <form onSubmit={handleProfileUpdate} encType="multipart/form-data">
            <h4 className="text-center font-bold mb-3">PROFILE</h4>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              value={formData.username ? formData.username : userInfo.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              value={formData.email ? formData.email : userInfo.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor="Update Password">Update Password</label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="mt-4">
              <label htmlFor="Profile image">Update Profile image</label>
              <input
                className="form-control my-2"
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {loading?'Updating..':'UPDATE USER'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
