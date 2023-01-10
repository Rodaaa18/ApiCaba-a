const clienteService = require('../Services/clientesService.js')

async function getClientes(req, res){
    
    try{
        const clientes = await clienteService.Select();   
        let clientesResp = {
            statusCode : 200,
            messageError : "Success",
            data : clientes
        }  
        res.send(clientesResp)
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
    }
}
async function postCliente(req, res){
    
    try{
        await clienteService.Insert(req.body); 
        
        let clienteResp = {
            statusCode : 200,
            messageError : "Success",
            data : req.body
        }  
        res.send(clienteResp)
    }catch(err){
        let respError = {
            statusCode : 404,
            messageError : err,
            data: null
        }
        res.send(respError)
        
    }
}
async function getClienteById(req, res){
    
    try{
        const clientes = await clienteService.SelectById(req.params.id);  
        let clientesResp = {
            statusCode : 200,
            messageError : "Success",
            data : clientes
        } 
        if(clientes.length > 0){
            res.send(clientesResp)
        }
        else return res.send({
            statusCode : 404,
            messageError : "Error, no se encontro el Cliente con el id" + " "+ req.params.id,
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
async function deleteCliente(req, res){
    try{
        const cliente = await clienteService.Delete(req.params.id); 
        let clienteResp = {
            statusCode : 200,
            messageError : "Success",
            data : cliente
        } 
        res.send(clienteResp)
    }catch(err){
        res.send({
            statusCode : 404,
            messageError : err,
            data: null
        })
    }
}
module.exports = {
    getClientes,
    postCliente,
    getClienteById,
    deleteCliente
}