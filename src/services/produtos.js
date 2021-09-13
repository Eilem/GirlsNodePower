const ErrorService = require("./error");

class ProdutoService {
  constructor(ProdutoModel) {
    this.produto = ProdutoModel;
  }
  async get() {
    const produtos = await this.produto.findAll();
    return produtos;
  }

  async gravar(produto) {
    const produtoExiste = await this.produto.findOne({
      where: {
        nome: produto.nome
      }
    })

    if (produtoExiste) {
      throw new ErrorService(`O produto ${produto.nome} já está cadastrado no banco de dados!`, 400, 'Bad Request')
    }

    const dataAtual = new Date()
    produto.createdAt = dataAtual
    produto.updatedAt = dataAtual

    const produtoGravado = this.produto.create(produto)
    return produtoGravado
  }
}

module.exports = ProdutoService;