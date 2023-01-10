const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

const connection = require('./connect.js');
const serviceCabaña = require('./src/Services/CabañaService.js')

// -----------------------------------------------------------------------ROUTES
const cabañas_route = require("./src/Routes/cabañasRoutes.js");
const clientes_routes = require("./src/Routes/clientesRoutes.js");
const reservas_routes = require("./src/Routes/reservasRoutes.js");

// -----------------------------------------------------------------------USO DE DEPENDENCIAS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// -----------------------------------------------------------------------CABAÑAS
app.use("/superadmin", cabañas_route, clientes_routes,reservas_routes);

app.listen(port, () => {
  console.log(`Server On at port: ${port}`);
});


//serviceCabaña.SelectDisponibles()

