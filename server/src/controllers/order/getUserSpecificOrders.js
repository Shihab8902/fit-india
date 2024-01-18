const orderCollection = require("../../models/orderModel");

const getUserSpecificOrder = async (req, res, next) => {
    try {
        const email = req.query.email;

        if (email !== req.email.user) {
            return res.status(403).send({ message: "forbidden" });
        }

        const filter = { email: email };
        const result = await orderCollection.find(filter).sort({ orderedAt: -1 });
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = getUserSpecificOrder;