// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var clienteController = require('../Controllers/clienteController.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/clientes', clienteController.getClientes);
api.post('/clientes-create', clienteController.postCliente);
api.get('/clientes/:id',clienteController.getClienteById );
api.delete('/clientes-delete/:id',clienteController.deleteCliente);
 
// Exportamos la configuración
module.exports = api;