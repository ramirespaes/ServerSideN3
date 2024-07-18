import jwt from 'jsonwebtoken'

function verifyJWT(req, res, next){
    const tokenAtivo = req.headers['x-access-token']

    if (!tokenAtivo){
        return res.status(403).json({})
    }

    try{    
        jwt.verify(tokenAtivo, process.env.SECRET, (err, decoded) => {
            if (err){
                return res.status(401).json({ erro: "token inválido "})
            }

            next()
        })
    } catch {
        return res.status(401).json({ erro: "token inválido " })
    }
}

export default verifyJWT