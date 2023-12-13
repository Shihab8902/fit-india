const productCollection = require("../../models/productModel");

const getBestSellingProducts = async (req, res, next) => {
    try {
        const result = await productCollection.find().sort({ soldQuantity: -1 }).limit(4);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = getBestSellingProducts;