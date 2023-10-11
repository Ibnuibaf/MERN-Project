import React from 'react'

function Home() {
  return (
    <>
        <div class="container h-[680px] flex items-center px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Make Your Diary </span>
            <br class="hidden lg:block"></br>
            Memorable Treasure
          </h1>
          <br></br>
          <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
          Capture your thoughts, dreams, and memories, one page at a time.{" "}
            <a href="" className="underline">
              Diary Keeper.
            </a>{" "}
            Your diary, your story, your journey.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home