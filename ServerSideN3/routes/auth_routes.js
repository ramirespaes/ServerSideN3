import express from "express"
import {auth} from "../controller/auth_controller.js"

let authRouter = express.Router()

authRouter.post('/', auth.GerarToken)

export {authRouter}