const { DataTypes } = require('sequelize');
const connection = require('../../connect.js');


const Cabaña = connection.sequelize.define('CABAÑAS', {

    idCabania:{
        type : connection.DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement : true
    },
    nombre:{
        type: connection.DataTypes.STRING,
        allowNull : false,
    },
    cantidadPersonas:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    minimoDias:{
        type: connection.DataTypes.INTEGER,
        allowNull : false
    },
    disponible:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    especificaciones:{
        type: connection.DataTypes.STRING,
        allowNull : false
    },
    aireAcondicionado:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    pileta:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    cantidadDormitorios:{
        type: connection.DataTypes.INTEGER,
        allowNull : false
    },
    tvLed:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    cantidadTvs:{
        type: connection.DataTypes.INTEGER,
        allowNull : false
    },
    camaDosPlazas:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    cantidadCamaDosPlazas:{
        type: connection.DataTypes.INTEGER,
        allowNull : false
    },
    camaUnaPlaza:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    cantidadCamaUnaPlaza:{
        type: connection.DataTypes.INTEGER,
        allowNull : false
    },
    calefaccion:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
    cochera:{
        type:connection. DataTypes.BOOLEAN,
        allowNull : false
    },
    asador:{
        type: DataTypes.BOOLEAN,
        allowNull : false
    },
    wifi:{
        type: DataTypes.BOOLEAN,
        allowNull : false
    },
    directv:{
        type: connection.DataTypes.BOOLEAN,
        allowNull : false
    },
},{
    createdAt : false,
    updatedAt : false,
    timeStamp : false
});

exports.Cabaña = Cabaña;
