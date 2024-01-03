const { default: mongoose } = require("mongoose");
const cartCollection = require("../../models/cartModel");

const deleteCartItems = async (req, res, next) => {
    try {
        const id = req.query.id;
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        const result = await cartCollection.deleteOne(filter);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = deleteCartItems;