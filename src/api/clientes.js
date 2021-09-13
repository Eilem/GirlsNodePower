const express=require('express')
const router=express.Router()
const { clientes } = require('../models')
const ClientesService = require('../services/clientes')


const clientesService=new ClientesService(clientes)
console.log(clientesService);


router.get("/",async(req,res)=>{

  const clientes=await clientesService.get()
  console.log(clientes);

  res.status(200).json(clientes)
})

router.post("/",async(req,res)=>{
  const {nome,email,endereco,telefone}=req.body
  try{
    await clientesService.adicionar({nome,email,endereco,telefone})
    res.status(201).send('Seu cadastro foi realizado com sucesso')
  }catch(erro){
    res.status(400).send("Não foi possvel cadastrar cliente")
  }
})

module.exports=router