import express from "express"
import dotenv from "dotenv";
import cors from "cors";


export const app = express();

dotenv.config()

let PORT = process.env.PORT;

app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Bienvenido a app.js')
})



app.listen(PORT,
    console.log(`Aplicación corriendo en puerto http://localhost:${PORT}`)
);

