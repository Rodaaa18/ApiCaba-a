const connection = require("../../connect.js");
const clientes = require("../Models/Clientes.js");

exports.Insert = async function(clientesCreate){
    try {
        await clientes.Clientes.create({
            nombre : clientesCreate.nombre,
            apellido : clientesCreate.apellido,
            telefono : clientesCreate.telefono,
            dni : clientesCreate.dni,
            patente : clientesCreate.patente,
            formaDePago : clientesCreate.formaDePago,
            total : clientesCreate.total,
            idCabania : clientesCreate.idCabania           
        })
        
    }catch(err){
       return({
            statusCode : 500,
            messageError : err,
            data : null
       })
    }
}
exports.Select = async function(){
    let Clientes = await clientes.Clientes.findAll();
    try{
        return Clientes;
    }catch(err){
        throw new Error("Error al buscar los Clientes en la Base de Datos")
    }
}
exports.SelectDisponibles = async function(){
    let Cabañas = await clientes.Clientes.findAll({
        where : {
            disponible : true
        }
    });

    return console.log("Cabañas", JSON.stringify(Cabañas, null, 2));
        
}
exports.SelectById = async function(id){
    try{
        let cliente = await clientes.Clientes.findAll({
            where : {
                idCliente : {
                    [connection.Op.eq] : Number(id)
                }
            }  
        });
            return cliente;
    }
    catch(err)  {
        throw new Error("Error al buscar el Cliente con el id" + " " + id)
    }
}
exports.Update = async function(id, clienteUpdate){
    try{
        await clientes.Clientes.update({
            nombre : clienteUpdate.nombre,
            apellido : clienteUpdate.apellido,
            telefono : clienteUpdate.telefono,
            dni : clienteUpdate.dni,
            patente : clienteUpdate.patente,
            formaDePago : clienteUpdate.formaDePago,
            total : clienteUpdate.total,
            idCabania : clienteUpdate.idCabania   
        },{
            where : {
                idCliente : id
            }
        });
    }catch(err){
         throw new Error("Error al actualizar el Cliente" + " "+ err)
    }
}
exports.Delete = async function(id){
    try{
        await clientes.Clientes.destroy({
            where : {
                idCliente : Number(id)
            }
        })
    }catch(err){
        throw new Error("Error al eliminar el Cliente con el id "+ id)
    }
}