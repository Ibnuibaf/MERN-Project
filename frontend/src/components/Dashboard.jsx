import React from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function Dashboard() {
  return (
    <div className="h-screen">
      <div className="text-center text-white mb-20">
        <h1 className="text-4xl font-bold m-2 underline underline-offset-4">
          Admin DashBoard
        </h1>
        <h3 className="text-2xl mt-5 font-semibold">Users Management</h3>
      </div>
      <div className=" flex justify-center items-center">
        <div className="h-[550px] overflow-y-scroll border rounded-lg">
          <table className="table-fixed border-separate border border-gray-400">
            <thead>
              <tr className="text-white text-xl h-[40px] sticky top-0 bg-zinc-800">
                <th className=" border-4 border-slate-600 md:w-[380px] ">
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
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
              <tr className="text-white">
                <td className="border border-slate-600">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">1961</td>
                <td className="border border-slate-600 flex justify-center">
                  <span className="flex">
                    <MdDeleteOutline
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                    <MdEdit
                      size={25}
                      color="white"
                      className="hover:cursor-pointer"
                    />{" "}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
