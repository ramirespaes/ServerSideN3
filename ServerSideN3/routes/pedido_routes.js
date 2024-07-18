import express from "express"
import {pedido} from "../controller/pedido_controller.js"
import verifyJWT from "../middleware/auth_middleware.js"

let pedidoRouter = express.Router()

pedidoRouter.get('/', pedido.Todos)
pedidoRouter.get('/:num_pedido', pedido.ObterPorCodigo)
pedidoRouter.delete('/:num_pedido', verifyJWT, pedido.Deletar)

export {pedidoRouter}