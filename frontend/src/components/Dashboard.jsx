import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    _id: "",
    username: "",
    email: "",
  });
  const [filtered, setFiltered] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState();

  const handleEditSubmit = (e) => {
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
        axios
          .patch("http://localhost:3333/admin/update-user", formData)
          .then((res) => {
            setLoading(false);
            setErrors(false);
            res.data.updatedUsers
              ? setUsers([...res.data.updatedUsers])
              : toast.error("Failed to update user");
            setFormData({
              _id: "",
              username: "",
              email: "",
            });
          })
          .catch((err) => {
            setLoading(false);
            setErrors(err.response.data.message);
            toast.error(errors);
          });
      } catch (error) {
        setLoading(false);
        setErrors(error.message);
        toast.error(errors);
      }
    }
  };

  const handleUserDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3333/admin/user-delete?id=${id}`)
      .then((res) => {
        res.data.updatedUsers
          ? setUsers([...res.data.updatedUsers])
          : toast.error("Failed to Delete user");
      })
      .catch((err) => {
        setErrors(err.response.data.message);
        toast.error(errors);
      });
  };

  const handleFiltering = () => {
    try {
      const filteredRegex = new RegExp(filtered, "i");
      const filteredUsers = [];

      for (const user of users) {
        if (filteredRegex.test(user.username)) {
          filteredUsers.push(user);
        }
      }

      setFilteredUsers(filteredUsers);
      console.log(filteredUsers, "Filtered and....................");
    } catch (error) {
      setErrors(error);
      toast.error(errors);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3333/admin/users")
      .then((res) => {
        setUsers([...res.data.usersDetails]);
        console.log(users);
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
    console.log(formData);
  }, [formData]);
  return (
    <div className="h-screen text-white">
      <div className="text-center text-white ">
        <h1 className="text-4xl font-bold m-2 underline underline-offset-4">
          Admin DashBoard
        </h1>
        <h3 className="text-2xl  font-semibold">Users Management</h3>
      </div>
      <div className="flex justify-center p-5">
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-grey-700 bg-slate-600 border rounded-md focus:border-grey-400 focus:ring-grey-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              value={filtered}
              onChange={(e) => setFiltered(e.target.value)}
            />
            <button
              onClick={handleFiltering}
              className="px-4 text-white bg-slate-900 border-l rounded "
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center row-auto">
        <div className=" flex justify-center items-center">
          <div className="h-[550px] overflow-y-scroll border rounded-lg">
            <table className="table-fixed border-separate border border-gray-400">
              <thead>
                <tr className="text-white text-xl h-[40px] sticky top-0 bg-zinc-800">
                  <th
                    colSpan={2}
                    className=" border-4 border-slate-600 md:w-[380px] "
                  >
                    Username
                  </th>
                  <th className=" border-4 border-slate-600 md:w-[380px] ">
                    Email
                  </th>
                  <th className=" border-4 border-slate-600 md:w-[200px] ">
                    No. of Diary
                  </th>
                  <th className=" border-4 border-slate-600 md:w-[100px] ">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length
                  ? filteredUsers.map((user) => {
                      return (
                        <tr className="text-white">
                          <td className="border border-r-0 border-slate-600"></td>
                          <td className="border border-l-0 border-slate-600">
                            <div className="flex items-center gap-2 p-2">
                              <img
                                src={user.profile}
                                alt=""
                                className="h-10 w-10 rounded-[50%]"
                              />
                              <span>{user.username}</span>
                            </div>
                          </td>
                          <td className="border border-slate-600">
                            {user.email}
                          </td>
                          <td className="border border-slate-600">
                            {user.diary.length}
                          </td>
                          <td className=" flex justify-end ">
                            <span className="flex ">
                              <MdDeleteOutline
                                size={35}
                                color="white"
                                className="hover:cursor-pointer"
                                onClick={() => handleUserDelete(user._id)}
                              />{" "}
                              <MdEdit
                                size={35}
                                color="white"
                                className="hover:cursor-pointer"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    _id: user._id,
                                    username: user.username,
                                    email: user.email,
                                  })
                                }
                              />{" "}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  : users.map((user) => {
                      return (
                        <tr className="text-white">
                          <td className="border border-r-0 border-slate-600"></td>
                          <td className="border border-l-0 border-slate-600">
                            <div className="flex items-center gap-2 p-2">
                              <img
                                src={user.profile}
                                alt=""
                                className="h-10 w-10 rounded-[50%]"
                              />
                              <span>{user.username}</span>
                            </div>
                          </td>
                          <td className="border border-slate-600">
                            {user.email}
                          </td>
                          <td className="border border-slate-600">
                            {user.diary.length}
                          </td>
                          <td className=" flex justify-end ">
                            <span className="flex ">
                              <MdDeleteOutline
                                size={35}
                                color="white"
                                className="hover:cursor-pointer"
                                onClick={() => handleUserDelete(user._id)}
                              />{" "}
                              <MdEdit
                                size={35}
                                color="white"
                                className="hover:cursor-pointer"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    _id: user._id,
                                    username: user.username,
                                    email: user.email,
                                  })
                                }
                              />{" "}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center w-72">
          <div className="border h-fit p-5 mb-12 md:mb-0 md:w-8/12 lg:w-5/6 xl:w-5/6">
            <p className="font-semibold text-center underline">
              Update User Details
            </p>
            <form onSubmit={handleEditSubmit} encType="multipart/form-data">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />

              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className="text-center flex justify-center p-5 lg:text-left">
                <button
                  type="submit"
                  className="px-40 bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Update User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
