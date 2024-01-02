const cartCollection = require("../../models/cartModel");

const getCartItems = async (req, res, next) => {
    try {
        const user = req.query.user;
        if (user !== req.email?.user) {
            return res.status(403).send({ message: "forbidden" });
        }
        const filter = { user: user };
        const result = await cartCollection.find(filter);
        res.status(200).send(result);

    }
    catch (error) {
        next(error);
    }
}


module.exports = getCartItems;