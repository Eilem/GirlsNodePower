const express=require('express')
const router=express.Router()
const { clientes } = require('../models')
const ClientesService = require('../services/clientes')

const clientesService=new ClientesService(clientes)
console.log(clientesService);

/**
 * Obtém lista de clientes
 */
router.get("/",async(req,res)=>{

  const clientes=await clientesService.get()
  console.log(clientes);

  res.status(200).json(clientes)
})

/**
 * Cadastra um novo cliente
 */
router.post("/", async(req,res)=>{
  /*
    #swagger.tags = ['Clientes']
    #swagger.description = 'Endpoint para cadastrar um cliente'
    #swagger.parameters['NovoCliente] = {
      in: 'body',
      description: 'Informações do cliente',
      required: true,
      type: 'object',
      schema: { $ref: '#/definitions/NovoCliente'}
    }
    #swager.responses[201] = {
      description: 'Cliente cadastrado com sucesso'
    }
    #swagger.responses[400] = {
      description: 'Nome e telefone são obrigatórios'
    }
  */
  const {nome,email,endereco,telefone}=req.body
  try{
    await clientesService.adicionar({nome,email,endereco,telefone})
    res.status(201).send('Seu cadastro foi realizado com sucesso');

  }catch(erro){
    res.status(400).send("Não foi possvel cadastrar cliente")
  }
})

module.exports=router