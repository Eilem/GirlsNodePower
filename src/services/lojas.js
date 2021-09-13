/**
 * Classe para gerenciar as RN de lojas 
 */
class LojaService {

    constructor(LojaModel) {
      this.lojas = LojaModel;
    }
''
    /**
     * Obtém todas as lojas cadastradas
     */
    async get() {
      const lojas = await this.lojas.findAll();
      return lojas;
    }
    
    /**
     * Cadastra uma  nova loja
     */
    async adicionar(loja){
      try{
        await this.lojas.create(loja)
      }catch(erro){
        console.erro(erro.mensagem);
        throw erro;
      }
    }

}
module.exports = LojaService;