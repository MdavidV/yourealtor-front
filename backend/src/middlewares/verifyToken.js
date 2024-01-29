import jwt from 'jsonwebtoken';
import config from '../config';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    
    if(!token){
        return res.status(401).json({message: 'token no proporcionado'});
    }

    try{
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Token no valido'})
    }
}

export default verifyToken;