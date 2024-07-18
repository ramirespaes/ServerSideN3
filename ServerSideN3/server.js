import { config } from "dotenv-safe"
config()
import express from "express"
import ConfigurarRotas from './routes/router.js'
import http from 'http'
import bodyParser from 'body-parser';

let app = express()

app.use(express.json())
app.use(express.urlencoded({extented:true}))
app.use(bodyParser.json());
app.use('/', await ConfigurarRotas())

app.listen(3000, function () {
    console.log("porta 3000")  
})