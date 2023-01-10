// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var CabañaController = require('../Controllers/cabañaController.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/cabanias', CabañaController.getCabañas);
api.post('/cabanias-create', CabañaController.postCabaña);
api.get('/cabanias/:id',CabañaController.getCabañaById );
api.delete('/cabanias-delete/:id',CabañaController.deleteCabaña);
 
// Exportamos la configuración
module.exports = api;