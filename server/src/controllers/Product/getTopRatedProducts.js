const productCollection = require("../../models/productModel");

const getTopRatedProducts = async (req, res, next) => {
    try {
        const result = await productCollection.find().sort({ totalRatings: -1 }).limit(4);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = getTopRatedProducts;