import React from "react";
import { Link } from "react-router-dom";

function Diary() {
  return (
    <>
    <div className="flex justify-center p-5">
      {/* <Link to={'/create'} className="px-40 bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Add Diary</Link> */}
    </div>
      <div className="flex flex-wrap gap-2 md:px-28 py-5">
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Steve Jobs
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          The only way to do great work is to love what you do.
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Albert Einstein
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          In the middle of every difficulty lies opportunity.
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Theodore Roosevelt
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Believe you can and you're halfway there.
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mahatma Gandhi
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          The future depends on what you do today.
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Winston Churchill
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Success is not final, failure is not fatal: It is the courage to continue that counts
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Franklin D. Roosevelt
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          The only limit to our realization of tomorrow will be our doubts of today
          </p>
        </a>
        <a
          href="#"
          className="w-full md:w-1/3 block max-w-sm h-40 overflow-hidden p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Steve Jobs
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Your time is limited, don't waste it living someone else's life.
          </p>
        </a>
      </div>
    </>
  );
}

export default Diary;
