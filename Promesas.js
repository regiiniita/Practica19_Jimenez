function obtenerDatosDelServidor(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let exito = true;

        if(exito){
            let usuario ={
                nombre: "Regina",
                edad:20
            }
            resolve(usuario)
        }else{
            reject("Ocurrio un error al obtener los datos")
        }
    }, 200)
    })
}

obtenerDatosDelServidor().then(resp =>{
    return resp.nombre.toUpperCase();
}).then(nombreEnMayus=>{
    console.log("Nombre en mayusculas: ", nombreEnMayus)
})
.catch(err =>{
    console.log("Entro en el .catch: ", err)
}).finally(()=>{
    console.log("Fin de la tarea")
})

async function obtenerPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/post/1");
        console.log(response);
    }catch(error){
        
    }finally{

    }

}

obtenerPosts()