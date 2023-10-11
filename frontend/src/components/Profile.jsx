import React from "react";

function Profile() {
  return (
    <main
      className="flex justify-center items-center"
      style={{ height: "90vh" }}
    >
      <div className="p-3 border-2" style={{ width: "20rem" }}>
        <form encType="multipart/form-data" >
          <h4 className="text-center font-bold mb-3">UPDATE</h4>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm Password"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label htmlFor="Profile image">Profile image</label>
          <input
            className="form-control my-2"
            type="file"
            name="image"
            // onChange={(e) => setImage(e.target.files[0])}
          />

          {/* {isLoading && <Loader />} */}

          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            UPDATE USER
          </button>
        </form>
      </div>
    </main>
  );
}

export default Profile;
