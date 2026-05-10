const bcrypt = require('bcrypt');

function hashPassword(password) {
    return bcrypt.hashSync(password, 11);
}

async function verifyPassword(plainTextPassword, hashedPassword){
    return bcrypt.compare(plainTextPassword, hashedPassword);
}


module.exports = {
    hashPassword,
    verifyPassword
}