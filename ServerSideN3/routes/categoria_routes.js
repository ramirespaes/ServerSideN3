import express from "express"
import {categoria} from "../controller/categoria_controller.js"
import verifyJWT from "../middleware/auth_middleware.js"

let categoriaRouter = express.Router()

categoriaRouter.get('/', categoria.Todos)
categoriaRouter.post('/', verifyJWT, categoria.Inserir)
categoriaRouter.put('/:id_categoria', verifyJWT, categoria.Atualizar)
categoriaRouter.delete('/:id_categoria', verifyJWT, categoria.Deletar)
categoriaRouter.get('/:id_categoria', categoria.ObterPorCodigo)

export {categoriaRouter}