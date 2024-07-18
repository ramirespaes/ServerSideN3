import express from "express"
import {produto} from "../controller/produto_controller.js"
import verifyJWT from "../middleware/auth_middleware.js"


let produtoRouter = express.Router()

produtoRouter.get('/', produto.Todos)
produtoRouter.post('/', verifyJWT, produto.Inserir)
produtoRouter.put('/:cod_produto', verifyJWT, produto.Atualizar)
produtoRouter.delete('/:cod_produto', verifyJWT, produto.Deletar)
produtoRouter.get('/:cod_produto', produto.ObterPorCodigo)
produtoRouter.get('/categoria/:id_categoria', produto.ObterPorCategoria)
produtoRouter.get('/qtde/:qtde_produto', produto.ObterPorQtdePedido)

export {produtoRouter}