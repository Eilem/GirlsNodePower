/**
 * Classe de serviço de Cliente
 * Responsável pelas regras de negócio e manipulação dos dados
 */
class ClientesService{
    constructor(CLienteModel){
        this.cliente=CLienteModel

    }

    /**
     * 
     * @returns Obtém lista de clientes
     */
    async get(){
        const clientes=await this.cliente.findAll()
        return clientes
    }
    
    /**
     * Cadastra novo cliente
     * @param {*} cliente 
     */
    async adicionar(cliente){
        try{
            await this.cliente.create(cliente)
        }catch(erro){
            console.erro(erro.mensagem)
            throw erro
        }
    }
}

module.exports=ClientesService