const { default: mongoose } = require("mongoose");
const orderCollection = require("../../models/orderModel");
const cartCollection = require("../../models/cartModel");

const afterPaymentSuccess = async (req, res, next) => {
    const transactionId = req.params.id;
    const productIds = req.query?.id?.split(",");

    const filter = { transactionId: transactionId };

    const result = await orderCollection.updateOne(filter, { status: "paid" });

    if (result?.modifiedCount > 0) {
        //Delete from cart after order complete
        const objectIds = await productIds?.map(id => new mongoose.Types.ObjectId(id));
        const idFilter = { _id: { $in: objectIds } };
        await cartCollection.deleteMany(idFilter);
    }

    res.redirect(`http://localhost:5173/success/${transactionId}`);


}


module.exports = afterPaymentSuccess;