const addressCollection = require("../../models/addressModel");

const postAddress = async (req, res, next) => {
    try {
        const data = req.body;
        const newData = addressCollection(data);
        const result = await newData.save();
        res.status(200).send(result);

    }
    catch (error) {
        next(error);
    }
}


module.exports = postAddress;