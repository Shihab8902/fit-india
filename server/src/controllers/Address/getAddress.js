const addressCollection = require("../../models/addressModel");

const getAddress = async (req, res, next) => {
    try {
        const email = req.query.email;

        if (req.email.user !== email) {
            return res.status(403).send({ message: "forbidden" });
        }

        const filter = { email: email };
        const result = await addressCollection.find(filter);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = getAddress;