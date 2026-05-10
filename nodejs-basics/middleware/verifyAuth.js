const { verifyAccessToken } = require("../auth/utils");
const { UnauthorizedError, BadRequestError } = require("../utils/http_exceptions");

async function verifyAuthMiddleware(req,res,next){
    const value = req.headers.authorization;

    if(!value?.trim()){
        throw new UnauthorizedError("Token is required.");
    }

    const [type, token] = value?.split(" ") ?? [];

    if(type !== "Bearer") {
        throw new UnauthorizedError("Invalid token type. Please use Bearer token.");
    }

    if(!token?.trim()){
        throw new BadRequestError("Token is required.");
    }

    const decoded = await verifyAccessToken(token);
    
    req.user = {id: decoded.id};
    next();
}

module.exports = {
  verifyAuthMiddleware
}