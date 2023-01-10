const cabañaService = require('../Services/CabañaService.js')

async function getCabañas(req, res){
    
    try{
        const cabañas = await cabañaService.Select();   
        let cabañasResp = {
            statusCode : 200,
            messageError : "Success",
            data : cabañas
        }  
        res.send(cabañasResp)
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
    }
}
async function postCabaña(req, res){
    
    try{
        await cabañaService.Insert(req.body); 
        
        let cabañasResp = {
            statusCode : 200,
            messageError : "Success",
            data : req.body
        }  
        res.send(cabañasResp)
        res.redirect("/")  
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
        
    }
}
async function getCabañaById(req, res){
    
    try{
        const cabañas = await cabañaService.SelectById(req.params.id);  
        let cabañasResp = {
            statusCode : 200,
            messageError : "Success",
            data : cabañas
        } 
        if(cabañas.length > 0){
            res.send(cabañasResp)
        }
        else return res.send({
            statusCode : 404,
            messageError : "Error, no se encontro la cabaña con el id" + " "+ req.params.id,
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
async function deleteCabaña(req, res){
    try{
        const cabañas = await cabañaService.Delete(req.params.id); 
        let cabañasResp = {
            statusCode : 200,
            messageError : "Success",
            data : cabañas
        } 
        res.send(cabañasResp)
    }catch(err){
        res.send({
            statusCode : 404,
            messageError : err,
            data: null
        })
    }
}
module.exports = {
    getCabañas,
    postCabaña,
    getCabañaById,
    deleteCabaña
}