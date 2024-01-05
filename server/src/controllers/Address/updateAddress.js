const mongoose = require("mongoose");
const addressCollection = require("../../models/addressModel");

const updateAddress = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.query.id;
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        const result = await addressCollection.updateOne(filter, data);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}

module.exports = updateAddress;