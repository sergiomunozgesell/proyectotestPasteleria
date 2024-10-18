import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const dbconn = async () =>{
    try {
        const conn = await mongoose.connect(process.env.URI);
        if(!conn){
            return `No se logro establecer conexión a la base de datos....`
        }
        console.log(`Conexion a la base de datos con éxito...`);
        return conn;
    } catch (error) {
        throw new Error(`Error en la ejecución del codigo y la conexion a la base de datos. ${error}`);
        
    }
}