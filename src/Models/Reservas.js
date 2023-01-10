const { DataTypes } = require('sequelize');
const connection = require('../../connect.js');
const { Cabaña } = require('./Cabaña.js');
const { Clientes } = require('./Clientes.js');

const Reservas = connection.sequelize.define('RESERVAS', {
    idReserva:{
        type : connection.DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement : true
    },
    desde:{
        type: connection.DataTypes.STRING,
        allowNull : false,
        isDate: true
    },
    hasta:{
        type: connection.DataTypes.STRING,
        allowNull : false,
        isDate: true
    },
    cantidadDias:{
        type: connection.DataTypes.INTEGER,
        allowNull : false,
    },
    montoReserva:{
        type: connection.DataTypes.INTEGER,
        allowNull : false,
    },
    nroReserva:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    entrega:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    total:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    idCabania:{
        type: connection.DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : Cabaña,
            key : 'idCabania'
        }
    },
    idCliente:{
        type: connection.DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : Clientes,
            key : 'idCliente'
        }
    },
},{
    createdAt : false,
    updatedAt : false,
    timeStamp : false
})

exports.Reservas = Reservas;