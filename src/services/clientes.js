class ClientesService{
    constructor(CLienteModel){
        this.cliente=CLienteModel

    }

    async get(){
        const clientes=await this.cliente.findAll()
        return clientes
    }
    
    async adicionar(clienteMGL){
        try{
            await this.cliente.create(clienteMGL)
        }catch(erro){
            console.erro(erro.mensagem)
            throw erro
        }
    }
}

module.exports=ClientesService