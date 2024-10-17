import express from "express"
import dotenv from "dotenv";
import cors from "cors";


export const app = express();

dotenv.config()

let PORT = process.env.PORT;

app.use(express.json());




app.listen();

