"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {

    // const { data: session } = useSession();

    const [paymentform, setpaymentform] = useState({name: "", message: "", amount: ""})
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") ==  "true") {

            toast('🦄 Thanks for your donation!', {
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
        router.push(`/${username}`)

    }, [])
    

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform)
    }

    const getData = async () => {

        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {

        // get the order id
        let a = await initiate(amount, username, paymentform);
        let orderId = a.id;

        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        // if username is not present in the database return 404 error
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
                theme="light"/>
            {/* Same as */}
            <ToastContainer />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='Cover w-full bg-red-300 relative'>
                <img className='object-cover w-full h-[350]' src={currentuser.coverpic} alt="" />
                <div className='absolute -bottom-9 right-[45%] border-2 border-white rounded-full'>
                    <img className='rounded-full' height={150} width={150} src={currentuser.profilepic} alt="" />
                </div>
            </div>

            <div className="info flex flex-col gap-1 justify-center items-center my-14">
                <div className="username font-bold text-xl">@{currentuser.username}</div>
                <div className='text-slate-400 text-sm'>Get {username} a chai</div>
                <div className='text-slate-400 text-sm'>{payments.length} Payments . Raised ₹{payments.reduce((a,b) => a + b.amount, 0)} till now</div>
            </div>

            <div className="paymentSec flex gap-3 m-auto w-[75%] mb-32">

                <div className="supporters w-1/2 bg-slate-900 rounded-xl p-10">
                    <h1 className='font-bold text-2xl my-5 text-center'>Supporters</h1>
                    {/* // show list of all the supporters on leaderBoard */}
                    <ul>
                        {payments.length == 0 && <li>No payments yet</li>}
                        {payments.map((p, i) => {
                            return <li className='my-4 flex gap-2 items-center'><img width={23} src="user.svg" alt="" /><span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span></li>
                        })}
                    </ul>
                </div>

                <div className="payment w-1/2 bg-slate-900 rounded-xl p-10">

                    <h2 className='text-2xl font-bold my-5 text-center'>Make a Payment</h2>

                    <div className='flex gap-2 my-6 flex-col'>
                        <div>
                            <input onChange={handleChange} value={paymentform.name} type="text" name='name' className='w-full p-3 rounded-lg bg-slate-600 outline-none' placeholder='Enter Name' />
                        </div>
                        <input onChange={handleChange} value={paymentform.message} type="text" name='message' className='w-full p-3 rounded-lg bg-slate-600 outline-none' placeholder='Enter Message' />
                        <input onChange={handleChange} value={paymentform.amount} type="text" name='amount' className='w-full p-3 rounded-lg bg-slate-600 outline-none' placeholder='Enter Amount' />
                        <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full disabled:bg-slate-600 disabled:from-slate-900 disabled:text-gray-500" disabled={paymentform.name?.length < 2 || paymentform.message?.length < 4 || paymentform.amount?.length<1}>Pay</button>
                    </div>

                    {/*or chose from these price options*/}
                    <div className="pricings flex gap-3">
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay 20₹</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay 30₹</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(5000)}>Pay 50₹</button>
                    </div>

                </div>
            </div>

        </>
    )
}


export default PaymentPage
