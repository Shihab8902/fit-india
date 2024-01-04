const { default: mongoose } = require("mongoose");
const addressCollection = require("../../models/addressModel");

const deleteAddress = async (req, res, next) => {
    try {
        const id = req.query.id;

        const filter = { _id: new mongoose.Types.ObjectId(id) }
        const result = await addressCollection.deleteOne(filter);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = deleteAddress;