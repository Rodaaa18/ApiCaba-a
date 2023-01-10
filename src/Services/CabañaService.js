const connection = require("../../connect.js");
const cabaña = require("../Models/Cabaña.js");

const Cabaña = {
    nombre : "",
    cantidadPersonas : "",
    minimoDias : "",
    disponible : "",
    especificaciones : "",
    aireAcondicionado : "",
    pileta : "",
    cantidadDormitorios : "",
    tvLed : "",
    cantidadTvs : "",
    camaDosPlazas : "",
    cantidadCamaDosPlazas : "",
    camaUnaPlaza : "",
    cantidadCamaUnaPlaza : "",
    calefaccion : "",
    cochera : "",
    asador : "",
    wifi : "",
    directv : ""
}
exports.Insert = async function(cabañaCreate){
    try {
        await cabaña.Cabaña.create({
            nombre : cabañaCreate.nombre,
            cantidadPersonas : cabañaCreate.cantidadPersonas,
            minimoDias : cabañaCreate.minimoDias,
            disponible : cabañaCreate.disponible,
            especificaciones : cabañaCreate.especificaciones,
            aireAcondicionado : cabañaCreate.aireAcondicionado,
            pileta : cabañaCreate.pileta,
            cantidadDormitorios : cabañaCreate.cantidadDormitorios,
            tvLed : cabañaCreate.tvLed,
            cantidadTvs : cabañaCreate.cantidadTvs,
            camaDosPlazas : cabañaCreate.camaDosPlazas,
            cantidadCamaDosPlazas : cabañaCreate.cantidadCamaDosPlazas,
            camaUnaPlaza : cabañaCreate.camaUnaPlaza,
            cantidadCamaUnaPlaza : cabañaCreate.cantidadCamaUnaPlaza,
            calefaccion : cabañaCreate.calefaccion,
            cochera : cabañaCreate.cochera,
            asador : cabañaCreate.asador,
            wifi : cabañaCreate.wifi,
            directv : cabañaCreate.directv
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
    let Cabañas = await cabaña.Cabaña.findAll();
    let result = ("Cabañas", JSON.stringify(Cabañas, null, 2));
    try{
        return Cabañas;
    }catch(err){
        throw new Error("Error al buscar las Cabañas en la Base de Datos")
    }
}
exports.SelectDisponibles = async function(){
    let Cabañas = await cabaña.Cabaña.findAll({
        where : {
            disponible : true
        }
    });

    return console.log("Cabañas", JSON.stringify(Cabañas, null, 2));
        
}
exports.SelectById = async function(id){
    try{
        let Cabañas = await cabaña.Cabaña.findAll({
            where : {
                idCabania : {
                    [connection.Op.eq] : Number(id)
                }
            }  
        });
            return Cabañas;
    }
    catch(err)  {
        throw new Error("Error al buscar la Cabaña con el id" + " " + id)
    }
}
exports.Update = async function(id, cabañaUpdate){
    try{
        await cabaña.Cabaña.update({
            nombre : cabañaUpdate.nombre,
            cantidadPersonas : cabañaUpdate.cantidadPersonas,
            minimoDias : cabañaUpdate.minimoDias,
            disponible : cabañaUpdate.disponible,
            especificaciones : cabañaUpdate.especificaciones,
            aireAcondicionado : cabañaUpdate.aireAcondicionado,
            pileta : cabañaUpdate.pileta,
            cantidadDormitorios : cabañaUpdate.cantidadDormitorios,
            tvLed : cabañaUpdate.tvLed,
            cantidadTvs : cabañaUpdate.cantidadTvs,
            camaDosPlazas : cabañaUpdate.camaDosPlazas,
            cantidadCamaDosPlazas : cabañaUpdate.cantidadCamaDosPlazas,
            camaUnaPlaza : cabañaUpdate.camaUnaPlaza,
            cantidadCamaUnaPlaza : cabañaUpdate.cantidadCamaUnaPlaza,
            calefaccion : cabañaUpdate.calefaccion,
            cochera : cabañaUpdate.cochera,
            asador : cabañaUpdate.asador,
            wifi : cabañaUpdate.wifi,
            directv : cabañaUpdate.directv
        },{
            where : {
                idCabania : id
            }
        });
    }catch(err){
         throw new Error("Error al actualizar la Cabaña" + " "+ err)
    }
}
exports.Delete = async function(id){
    try{
        await cabaña.Cabaña.destroy({
            where : {
                idCabania : Number(id)
            }
        })
    }catch(err){
        throw new Error("Error al eliminar la Cabaña con el id "+ id)
    }
}