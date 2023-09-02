import express , {Application} from "express"
import {db} from "./config/Database"
import env from "dotenv"
import { mainApp } from "./mainApp"
env.config()


const realPort: number = parseInt(process.env.PORT!)

const port:number = realPort
const app:Application = express()
mainApp(app)


app.listen(port,()=>{
    db()
    console.log(`server is live on ${port} `)
})