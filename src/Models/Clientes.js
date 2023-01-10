const { DataTypes } = require('sequelize');
const connection = require('../../connect.js');
const { Cabaña } = require('./Cabaña.js');


const Clientes = connection.sequelize.define('CLIENTES', {
    idCliente:{
        type : connection.DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement : true
    },
    nombre:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    apellido:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    telefono:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    dni:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    patente:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    formaDePago:{
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
},{
    createdAt : false,
    updatedAt : false,
    timeStamp : false
})

exports.Clientes = Clientes