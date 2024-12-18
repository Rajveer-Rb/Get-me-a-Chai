"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  const [showDropDown, setshowDropDown] = useState(false)

  return (
    <nav className='bg-blue-950 text-white flex justify-between px-4 items-center h-14'>

      {/* logo */}
        <Link href={"/"} className='flex gap-2 items-center'>
          <span>GetMeAChai</span>
          <span><img src="coffee.svg" alt="" /></span>
        </Link>


      <ul className='flex gap-4 items-center'>
        {/* <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li> */}
        <li className='relative'>
          {session && <> <button id="dropdownDefaultButton" onClick={() => setshowDropDown(!showDropDown)} onBlur={() => { setTimeout(() => { setshowDropDown(false) }, 300); }} data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className={`z-10 ${showDropDown ? "" : "hidden"} absolute left-[105px] top-[50px] bg-gray-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-200 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                </li>
                <li>
                  <Link href="#" onClick={() => {signOut()}} className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
            </>
          }
        </li>
        <li>
          {session && <button onClick={() => {signOut()}} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Logout</button>}

          {!session &&
            <Link href={"/login"}><button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-2'>Login</button></Link>
          }
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
