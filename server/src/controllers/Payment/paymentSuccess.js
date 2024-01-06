const orderCollection = require("../../models/orderModel");

const afterPaymentSuccess = async (req, res, next) => {
    const transactionId = req.params.id;
    const filter = { transactionId: transactionId };

    const result = await orderCollection.updateOne(filter, { status: "paid" });

    console.log(result);

    res.redirect(`http://localhost:5173/success/${transactionId}`);


}


module.exports = afterPaymentSuccess;