const jwt = require('jsonwebtoken');
const secret = require('./secretkey');

let tokenGenerator = (payload)=>{
    const token = jwt.sign(payload,secret.SECRET_KEY,{expiresIn:'15m'});
    return token;
}

let verifyToken = (req,res,next)=>{
    //const token = req.headers['x-access-token'];
    console.log(req.cookies);
    const token = req.cookies['jwt'];
    if(!token){
        res.status(400).send({"auth":"No token found in header"});
        return;
    }
    jwt.verify(token,secret.SECRET_KEY,(err,decode)=>{
        if(err){
            res.status(400).send({'auth':'Token verification failed'});
        }
            
        next();
    })
}

module.exports = {
    tokenGenerator,
    verifyToken
}