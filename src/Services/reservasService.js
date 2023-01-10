const connection = require("../../connect.js");
const reservas = require("../Models/Reservas.js");

exports.Insert = async function(reservasCreate){
    try {
        let result = await reservas.Reservas.create({
            desde : reservasCreate.desde,
            hasta : reservasCreate.hasta,
            cantidadDias : reservasCreate.cantidadDias,
            montoReserva : reservasCreate.montoReserva,
            nroReserva : reservasCreate.nroReserva,
            entrega : reservasCreate.entrega,
            total : reservasCreate.total,
            idCabania : reservasCreate.idCabania,
            idCliente : reservasCreate.idCliente        
        })
        console.log(result)
        return result;
        
    }catch(err){
       return({
            statusCode : 500,
            messageError : err,
            data : null
       })
    }
}
exports.Select = async function(){
    let reserva = await reservas.Reservas.findAll();
    try{
        return reserva;
    }catch(err){
        throw new Error("Error al buscar las Reservas en la Base de Datos")
    }
}
exports.SelectDisponibles = async function(){
    let reserva = await reservas.Reservas.findAll({
        where : {
            disponible : true
        }
    });

    return reserva
        
}
exports.SelectById = async function(id){
    try{
        let reserva = await reservas.Reservas.findAll({
            where : {
                idReserva : {
                    [connection.Op.eq] : Number(id)
                }
            }  
        });
       
            return reserva;
            
    }
    catch(err)  {
        throw new Error("Error al buscar la Reserva con el id" + " " + id)
    }
}
exports.Update = async function(id, reservaUpdate){
    try{
        await reservas.Reservas.update({
            desde : reservaUpdate.desde,
            hasta : reservaUpdate.hasta,
            cantidadDias : reservaUpdate.cantidadDias,
            montoReserva : reservaUpdate.montoReserva,
            nroReserva : reservaUpdate.nroReserva,
            entrega : reservaUpdate.entrega,
            total : reservaUpdate.total,
            idCabania : reservaUpdate.idCabania,
            idCliente : reservaUpdate.idCliente     
        },{
            where : {
                idReserva : id
            }
        });
    }catch(err){
         throw new Error("Error al actualizar la Reserva" + " "+ err)
    }
}
exports.Delete = async function(id){
    try{
        await reservas.Reservas.destroy({
            where : {
                idReserva : Number(id)
            }
        })
    }catch(err){
        throw new Error("Error al eliminar la Reserva con el id "+ id)
    }
}