const  jwt = require("jsonwebtoken")
const JWT_TOKEN = 123333

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwttoken = words[1];
    try {
        const decodedValue = jwt.verify(jwttoken, JWT_TOKEN)
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                msg :"you are not authorized"
            })
        }
    } catch (e) {
        res.json({
            msg :"incorrect inputs"
        })
        
    }
}

module.exports = adminMiddleware;