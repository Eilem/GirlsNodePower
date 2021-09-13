const express=require('express');
const router=express.Router();
const {lojas} = require('../models');
const LojaService = require("../services/lojas");

const lojaService = new LojaService(lojas);

/**
 * Recuro para obter lojas
 */
router.get('/',async (req,res) => {
    /*
        #swagger.tags = ['Lojas']
        #swagger.description = 'Endpoint para obter uma lista de lojas' 
    
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/Lojas"},
            description: 'Listagem de lojas.'
        }
        #swagger.responses[400] = {
            description: 'Desculpe, ocorreu um problema.'
        }
    */
    const lojasFisicas = await lojaService.get();
    res.status(200).json(lojasFisicas);
});

/**
 * recurso para cadastrar uma loja
 */
router.post('/',async(req,res)=>{
    const{nome,endereco}=req.body
    try{
        await lojaService.adicionar({nome,endereco})
        res.status(201).send('Loja cadastada com sucesso!!')
    }catch(erro){
        res.status(400).send('Não foi possível cadastrar loja :( ')
    }
})

module.exports=router