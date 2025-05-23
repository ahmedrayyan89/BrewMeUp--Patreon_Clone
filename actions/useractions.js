"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

export const initiate = = async (amount, to_username, paymentform) => {

    await connectDb()
    var instance = new Razorpay({ key_id: process.env.kEY_ID, key_secret: process.env.KEY_SECRET })


 let options = {
    amount : Number.parseInt(amount),
    currency: "INR",
    
 }
let x = await instance.orders.create(options)

await Payment.create({old:x.id, amount: amount, to_username: to_username, name:paymentform.name, message: paymentform.message })
return x

}