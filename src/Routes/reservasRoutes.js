// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var reservaController = require('../Controllers/reservaController.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/reservas', reservaController.getReservas);
api.post('/reservas-create', reservaController.postReserva);
api.get('/reservas/:id',reservaController.getReservaById );
api.delete('/reservas-delete/:id',reservaController.deleteReserva);
 
// Exportamos la configuración
module.exports = api;