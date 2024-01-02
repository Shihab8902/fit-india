const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken = async (req, res, next) => {
    try {
        const user = req.body;
        const token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "72h" });
        res.status(200).send({ token });
    }
    catch (error) {
        next(error);
    }
}


module.exports = generateToken;