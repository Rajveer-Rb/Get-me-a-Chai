import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-1">

        <div className="flex justify-center items-center font-bold text-3xl">Buy me a Chai <span><img className="w-24" src="tea.gif" alt="" /></span></div>

        <p>A Crowd-funding platform for creators, Get funded by your fans and followers</p>
        <div className="flex gap-2">
          <Link href={"/login"}>
          <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Start Now</button>
          </Link>
          
          <Link href="/about">
          <button type="button" className="focus:outline-none text-purple-800 bg-white  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 border-2 border-purple-800 hover:bg-purple-600 hover:text-white hover:border-3">Read More</button>
          </Link>
        </div>
      </div>

      {/* br tag */}
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-4xl font-extrabold text-center mb-14">Your Fans can buy you a Chai</h1>

        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="h-32" src="study.png" alt="" />
            <p>Fund yourself</p>
            <p>Your fans are available to fund you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="h-32" src="coin.gif" alt="" />
            <p>Fund yourself</p>
            <p>Your fans are available to fund you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="h-32" src="youth.png" alt="" />
            <p>Fans want to help</p>
            <p>Your fans are available to fund you</p>
          </div>

        </div>
      </div>

      {/* br tag */}
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center mb-14">Learn more about us</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RXeOiIDNNek?si=tOklqx8lHIQXAPU8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}