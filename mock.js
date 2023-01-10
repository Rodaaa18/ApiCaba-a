let cabañaCreate= {
    "nombre" : "Cholitos",
    "cantidadPersonas" : 6,
    "minimoDias" : 4,
    "disponible" : true,
    "especificaciones" : "Comodo departamento temporario",
    "aireAcondicionado" : true,
    "pileta" : true,
    "cantidadDormitorios" : 2,
    "tvLed" : true,
    "cantidadTvs" : 2,
    "camaDosPlazas" : true,
    "cantidadCamaDosPlazas" : 1,
    "camaUnaPlaza" : true,
    "cantidadCamaUnaPlaza" : 4,
    "calefaccion" : true,
    "cochera" : true,
    "asador" : true,
    "wifi" : true,
    "directv" :true
  }

  async function createTable(){

    await clientes.Clientes.sync();
    await reservas.Reservas.sync();
  }

  async function test(){
    try{
      await connection.sequelize.authenticate();
      console.log('Exitoso');
    }catch(err){
      console.log('Fallido')
    }
  }
  test();

  let cliente = {
    "nombre" : "Ricardo Alberto",
    "apellido" : "Gimenez",
    "telefono" : "35423658741",
    "dni" : "16524857",
    "patente" : "GG234BN",
    "formaDePago" : "Efectivo",
    "total" : "$54500",
    "idCabania" : 1 
  }

  let reserva = {
    "desde" : "",
    "hasta" : "",
    "cantidadDias" : "",
    "montoReserva" : "",
    "nroReserva" : "",
    "entrega" :"",
    "total" : "",
    "idCabania" : "",
    "idCliente" : ""
}

let reservas = {
  desde : "",
  hasta : "",
  cantidadDias : "",
  montoReserva : "",
  nroReserva : "",
  entrega :"",
  total : "",
  idCabania : "",
  idCliente : ""
}