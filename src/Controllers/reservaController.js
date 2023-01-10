const reservaService = require('../Services/reservasService.js')

async function getReservas(req, res){
    
    try{
        const reservas = await reservaService.Select();   
        let reservasResp = {
            statusCode : 200,
            messageError : "Success",
            data : reservas
        }  
        res.send(reservasResp)
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
    }
}
async function postReserva(req, res){
    
    try{
        let result = await reservaService.Insert(req.body); 
        console.log(result)
        let reservaResp = {
            statusCode : 200,
            messageError : "Success",
            data : req.body
        }  
        res.send(reservaResp)
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
        
    }
}
async function getReservaById(req, res){
    
    try{
        const reserva = await reservaService.SelectById(req.params.id);  
        let reservaResp = {
            statusCode : 200,
            messageError : "Success",
            data : reserva
        } 
        if(reserva.length > 0){
            res.send(reservaResp)
        }
        else return res.send({
            statusCode : 404,
            messageError : "Error, no se encontro la Reserva con el id" + " "+ req.params.id,
            data : null
        } )
        
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
    }
}
async function deleteReserva(req, res){
    try{
        const reserva = await reservaService.Delete(req.params.id); 
        let reservaResp = {
            statusCode : 200,
            messageError : "Success",
            data : reserva
        } 
        res.send(reservaResp)
    }catch(err){
        res.send({
            statusCode : 404,
            messageError : err,
            data: null
        })
    }
}
module.exports = {
    getReservas,
    postReserva,
    getReservaById,
    deleteReserva
}