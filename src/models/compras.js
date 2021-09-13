const compras=(sequelize,Datatypes)=>{
    const Compras=sequelize.define(
        "Compras",
        {
            nomeProduto:{
                type:Datatypes.STRING,
                allowNull:false
            },
            status:{
                type:Datatypes.STRING,
                allowNull:false
            },
        },
        {
            tableName:"compras"
        }
    )
    return Compras
}

module.exports=compras