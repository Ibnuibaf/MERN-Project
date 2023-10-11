import React from "react";

function Create() {
  return (
    <div className="h-screen items-center flex flex-col justify-center ">
      <div className="mb-6">
        <label htmlFor="" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          name=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[650px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id=""
          placeholder="Give title for today.."
        />
      </div>
      <div>
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="15"
          className="resize-none block p-2.5 w-[650px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."

          
        ></textarea>
      </div>
      <button type="submit" class="m-5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-800">Record Diary</button>

    </div>
  );
}

export default Create;
