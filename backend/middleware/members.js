const jwt  = require("jsonwebtoken")
const JWT_TOKEN = 123333

function membersMiddleware(role) {
    return (req,res,next) => {
        const token = req.headers.authorization;
        const words = token.split(" ")
        const jwttoken = words[1];
        try 
        {
            const decodedValue = jwt.verify(jwttoken, JWT_TOKEN)
            if(decodedValue.username && decodedValue.role === role){
                next();
            }
            else {
                res.status(403).json({
                    msg: "You are not authorized"
                })
            }
        }
        catch (e) {
            res.json({
                msg : "Incorrect inputs"
            })
        }
    }
}


module.exports = membersMiddleware;