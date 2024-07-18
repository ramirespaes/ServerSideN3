import { authRouter } from "./auth_routes.js";
import { categoriaRouter } from "./categoria_routes.js";
import { pedidoRouter } from "./pedido_routes.js";
import { produtoRouter } from "./produto_routes.js";
import express from 'express'

let ConfigurarRotas = async () => {
    try{
        let router = express.Router()

        router.use('/token', authRouter)
        router.use('/categoria', categoriaRouter)
        router.use('/pedido', pedidoRouter)
        router.use('/produto', produtoRouter)

        return router
    }catch (e) {
        console.log( e)
    }
}

export default ConfigurarRotas

