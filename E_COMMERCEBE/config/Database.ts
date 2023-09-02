import mongoose from "mongoose"
import env from "dotenv"
env.config()
const DB: string = process.env.DB_STRING!


export const db = async ()=>{
    try {
        mongoose.connect(DB).then(()=>{
            console.log("Connected")
        })
    } catch (error) {
        console.log("error")
    }
}
