const mongoose = require("mongoose");
const productCollection = require("../../models/productModel");

const getSingleProduct = async (req, res, next) => {
    try {
        const id = req.query.id;
        const query = { _id: new mongoose.Types.ObjectId(id) };
        const result = await productCollection.findOne(query);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = getSingleProduct;