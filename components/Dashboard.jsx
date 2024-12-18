// "use client"
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'

// const Dashboard = () => {

//   const {data : session} = useSession()
//   const [form, setform] = useState("")

//   if (!session) {
//     const router = useRouter()
//     router.push('/login')
//   }
//   return (
//     <div className='min-h-screen'>


//       <div className="inputs flex flex-col justify-center items-center w-[40%] m-auto my-12">

//         <div className=''>
//           <h1 className='text-center font-bold text-2xl'>Welcome to your Dashboard</h1>
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="name" className='text-sm font-bold'>Name</label>
//         <input type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="username" className='text-sm font-bold'>Username</label>
//         <input type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="mail" className='text-sm font-bold'>Email</label>
//         <input type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="profilePic" className='text-sm font-bold'>Profile picture</label>
//         <input type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="coverPic" className='text-sm font-bold'>Cover picture</label>
//         <input value={form.coverpic ? form.coverpic: ""} type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="razorpayId" className='text-sm font-bold'>Razorpay ID</label>
//         <input value={form.razorpayId ? form.razorpayId: ""} type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='my-1 flex flex-col gap-1 w-full'>
//         <label htmlFor="razorpaySecret" className='text-sm font-bold'>Razorpay Secret</label>
//         <input value={form.razorpaySecret ? form.razorpaySecret: ""} type="text" className='p-2 rounded-lg bg-slate-600' />
//         </div>

//         <div className='btn my-4 w-full'>
//         <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Pay</button>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Dashboard

// chatgpt
"use client"
import React, { useState, useEffect, Profiler } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { fetchuser, updateProfile } from '@/actions/useractions'
import Username from '@/app/[username]/page'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'


const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    // coverpic: "",
    // razorpayId: "",
    // razorpaySecret: ""
  })

  // useEffect(() => {
  //   getData()
  //   if (!session) {
  //     router.push('/login')
  //   }
  // }, [session, router])  // Only run this effect when session or router changes

  // chatgpt
  useEffect(() => {
    if (!session) {
      router.push('/login')
    } else {
      getData()
    }
  }, [session, router])  // Only run this effect when session or router changes

  const getData = async () => {
    // let u = await fetchuser(session.user.name)
    // setForm(u)
    if (session?.user?.name) {
      let u = await fetchuser(session.user.name)
      setForm(u)
    }
  }

  const handleChange = (e) => {
    // const { name, value } = e.target
    // setForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value
    // }))
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    let a = await updateProfile(e, session.user.name)
    toast('🦄 Profile Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  // if (!session) {
  //   return null  // Optionally, return a loading indicator here
  // }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      {/* Same as */}
      <ToastContainer />

      <div className='min-h-screen'>
        <h1 className='text-center font-bold text-2xl my-5'>Welcome to your Dashboard</h1>
        <form action={handleSubmit} className="inputs flex flex-col justify-center items-center w-[40%] m-auto my-12">

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="name" className='text-sm font-bold'>Name</label>
            <input value={form.name ? form.name : ""} onChange={handleChange} name="name" type="text" className='p-2 rounded-lg bg-slate-600' />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="username" className='text-sm font-bold'>Username</label>
            <input value={form.username ? form.username : ""} onChange={handleChange} name="username" type="text" className='p-2 rounded-lg bg-slate-600' />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="mail" className='text-sm font-bold'>Email</label>
            <input value={form.email ? form.email : ""} onChange={handleChange} name="email" id='email' type="email" className='p-2 rounded-lg bg-slate-600' />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="profilePic" className='text-sm font-bold'>Profile picture</label>
            <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} name="profilepic" type="text" className='p-2 rounded-lg bg-slate-600' />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="coverPic" className='text-sm font-bold'>Cover picture</label>
            <input
              name="coverpic"
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              className='p-2 rounded-lg bg-slate-600'
            />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="razorpayId" className='text-sm font-bold'>Razorpay ID</label>
            <input
              name="razorpayid"
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              type="password"
              className='p-2 rounded-lg bg-slate-600'
            />
          </div>

          <div className='my-1 flex flex-col gap-1 w-full'>
            <label htmlFor="razorpaySecret" className='text-sm font-bold'>Razorpay Secret</label>
            <input
              name="razorpaysecret"
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              type="password"
              className='p-2 rounded-lg bg-slate-600'
            />
          </div>

          <div className='btn my-4 w-full'>
            <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" onClick={handleSubmit}>Save</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Dashboard
