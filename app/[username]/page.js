import { Rock_3D } from 'next/font/google'
import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
// import User from '@/models/User'
const User = require('@/models/User')

const Username = async ({ params }) => {

  const checkUser = async() => {

    await connectDB()
    
    let u = await User.findOne(params.username)
    if(!u) {
      return notFound()
    }
  }
  await checkUser()

  return (
    <>
    {/* <PaymentPage Username={params.Username}/> */}
    <PaymentPage username={params.username}/>

    </>
  )
}

export default Username
