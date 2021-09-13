const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const { produtos } = require('../models');
const ProdutoService = require('../services/produtos');
const { body, check, validationResult } = require('express-validator');

const produtoService = new ProdutoService(produtos);

/**
 * Obter toda a lista de produtos
 */
router.get('/', async (req, res) => {
  try {
    const produtos = await produtoService.get();
    res.status(200).json(produtos);
  } catch (error) {
    errorResponse(res, error)
  }
});

router.post('/', [
  body('nome').notEmpty().withMessage('O atributo nome é obrigatório!'),
  body('preco').notEmpty().isNumeric().withMessage('O atributo preço é obrigatório e deve ser um número decimal!'),
  body('categoria').notEmpty().withMessage('O atributo categoria é obrigatório!'),
], async (req, res) => {
  const erros = validationResult(req)
  try {
    if (!erros.isEmpty()) {
      errorResponse(res, {message: erros.array()}, 400, 'Bad request')
    } else {
      const body = req.body
      const produto = await produtoService.gravar(body)
      res.status(201).json(produto)
    }
  } catch (e) {
    errorResponse(res, e)
  }
})

function errorResponse(res, error, statusCode, mensagem) {
  statusCode = statusCode ? statusCode : 500
  statusCode = error.statusCode ? error.statusCode : statusCode

  mensagem = mensagem ? mensagem : 'Erro no servidor'
  mensagem = error.mensagem ? error.mensagem : mensagem

  const resultado = {
    mensagem: mensagem,
    mensagemErro: error.message
  }

  res.status(statusCode).json(resultado)
}

module.exports = router;
