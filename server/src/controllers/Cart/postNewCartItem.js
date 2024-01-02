const cartCollection = require("../../models/cartModel");

const postCartItem = async (req, res, next) => {
    try {
        const product = req.body;

        const newProduct = cartCollection(product);
        const result = await newProduct.save();
        res.status(200).send(result);

    }
    catch (error) {
        next(error);
    }
}


module.exports = postCartItem;