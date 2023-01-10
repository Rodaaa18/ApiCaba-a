const { Sequelize, DataTypes, QueryTypes, Op } = require('sequelize');

const sequelize = new Sequelize('DB_CABANIAS', 'Roda', '37524857r', {
    dialect: 'mssql',
    host : '127.0.0.1',
    port : '1433',
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }
  });

exports.DataTypes = DataTypes;
exports.sequelize = sequelize;
exports.Op = Op;