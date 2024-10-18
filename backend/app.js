import express, { Router } from "express"
import dotenv from "dotenv";
import cors from "cors";
import { dbconn } from "./config/db.js";
import { userRoute } from "./routes/userRouter.js";

dbconn();
export const app = express();

dotenv.config()

let PORT = process.env.PORT;

/** middlewares */
app.use(express.json());
app.use('/api/user',userRoute);
app.use(cors("*"));


app.get('/', (req,res)=>{
    res.send('Bienvenido a app.js')
})



app.listen(PORT,
    console.log(`Aplicación corriendo en puerto http://localhost:${PORT}`)
);

