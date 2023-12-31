const productCollection = require("../../models/productModel")

const getTotalProductCount = async (req, res, next) => {
    try {
        const total = await productCollection.estimatedDocumentCount();
        res.send({ total });
    }
    catch (error) {
        next(error);
    }
}


module.exports = getTotalProductCount;