import jwt from 'jsonwebtoken'
let auth = {}

auth.GerarToken = async function(req, res, next){
    try{
        var { variavelclient_id, variavelclient_secret } = req.body

        if (variavelclient_id != "EstoqueFogaz" || variavelclient_secret != "secreto!"){
            return res.status(403).json({ mensagem: "Não possui credenciais necessárias para autenticar!" })
        }

        const token = jwt.sign({ id: Math.random() }, process.env.SECRET, {
            expiresIn: 300
        })

        return res.send({token: token})
    }
    catch(e) {
        console.log("erro: " + e)

        return res.status(403).json({mensagem: "Erro ao gerar Token"})
    }
}

export {auth}