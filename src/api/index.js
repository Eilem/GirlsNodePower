const express=require('express')

const lojasRouter=require('./lojas')
const produtosRouter=require('./produtos')
const clientesRouter=require('./clientes')

const router=express.Router();

router.use('/lojas',lojasRouter)
router.use('/produtos',produtosRouter)
router.use('/clientes',clientesRouter)

module.exports=router