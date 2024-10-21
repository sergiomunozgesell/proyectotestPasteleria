import User from "../models/userModel.js";

export const getusers = async (req,res) =>{
    try {
        
        const usuarios = await User.find();
        if(usuarios.length == 0) {
            return res.status
        } 

        return res.status(200).send({usuarios});


    } catch (error) {
        throw new Error("Error al ingresar a la ruta... ", error);
        
    }

}

export const create = async (req,res)=>{
    try {
        const {username, password, email} = req.body;
        const usuario = new User({username, password, email})
        await usuario.save();
        if(!usuario.save()){
            return res.status(400).send({message:`Error en la creación del usuario.`})
        }


        return res.status(200).send({message:`Usuario creado con éxito` , usuario}); 


    } catch (error) {
        throw new Error(`Error al dirigirse a la ruta, informar al equipo correspondiente.... ${error}`);
        
    }
}

export const modify = async (req,res)=>{

    try {
        const {username,password,email} = req.body;
        const {id} = req.params;        
        const modparam = {};
        if(username)modparam.username = username;
        if(password) modparam.password = password;
        if(email)  modparam.email = email; 
        
        const userUpdate = await User.findByIdAndUpdate(id, modparam, {
            new:true,
            runValidators:true
        })

        if(!userUpdate){
            return res.status(404).send({message:`No se encontró el recurso para actualizar....`});
        }

        return res.status(200).send({message:`Recurso actualizado exitosamente.`, userUpdate});

    } catch (error) {
        throw new Error("Error con la ruta, informar al área de desarrollo....", error);
        
    }
    
}

export const UserDelete = async (req,res) =>{
    try {
        
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        res.status(200).send({message:`Recurso eliminado con exito.... ${user}`});


    } catch (error) {
        return res.status(404).send({message:`Error en la petición, informar a desarrollo.... ${error}`});
    }
}