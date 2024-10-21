async function obtenerUsuarios() {

    let users = [];

    users = await fetch("http://localhost:5000/api/user")
    .then(res => res.json())
    .then(data => 
        {
        console.log(data);    
        return data;
        
    });

    return users;

}

async function crearUsuario (username,password,email){

    const user = {
        username :username,
        password: password,
        email:email
    }

    try {

        
        let response = await fetch("http://localhost:5000/api/user/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .catch(error =>{

            throw new Error("Error:... ",error);
        }
    );
        if(!response){
            return console.log("error con la petición post")   
        }

        console.log(`Usuario creado con éxito.... ${user}`);

        
    } catch (error) {
        return console.log(`Error con la petición para crear el usuario... ${error}`);
    }


}

function Mostrar(){
    let input = document.getElementById("username")
    
    console.log("Nombre: ",input.textContent, "Nombre 2: " ,input.value,"Nombre 3:", input.innerHTML);
}


document.addEventListener('DOMContentLoaded', async ()=>{

    let maincont = document.getElementById('main-con');
    // await obtenerUsuarios()
    let form = document.getElementById('form')
    console.log({form})

    // crearUsuario('Mario Lopez','m315405.','Mariolopezg@gmail.com')
})
