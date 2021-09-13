const compras = (sequelize, DataTypes) => {
    const Compras = sequelize.define("Compras",{
        id_cliente: {
          type: DataTypes.STRING,
          //unique:true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique:true,
          allowNull: false,
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING,
          unique:true,
          allowNull: false,
        }
      },
      {
        tableName: 'compras',
      }
    );
    return Compras
  }
  
  module.exports = compras
  