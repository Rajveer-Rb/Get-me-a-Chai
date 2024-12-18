"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
const User = require('@/models/User')
import Username from "@/app/[username]/page"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

    // fetch the secret of user getting paid
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret
    
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({username: username})
    if(!u) {
        return {error: "user not found"}
    }
    let user = u.toObject({flattenObjectIds: true})        // to flatten ids in mongodb
    return user
}

export  const fetchpayments = async (username) => {
    await connectDB()
    // find all payment sorted in decreasing order of amount and flatten object ids
    // let p = await Payment.find({to_user: username}.sort({amount: -1}).lean())

    // let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).lean().select('-_id'); // This excludes the `_id` field if you don't want it in the result.

    // fetch top 10 payments sorted in decreasing order of amount
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean; 
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // if 'username' is being update, check if username is available
    if(oldusername !== ndata.username) {
        let u = await User.findOne({username: ndata.username})
        if(u) {
            return {error: "Username already exists"}
        }
        await User.updateOne({email: ndata.email}, ndata)
        // now update all the usernames in the payments table
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }
    else {

        await User.updateOne({email: ndata.email}, ndata)
    }


}