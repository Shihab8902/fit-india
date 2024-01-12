const { default: mongoose } = require("mongoose");

require("dotenv").config();
const SSLCommerzPayment = require('sslcommerz-lts');
const orderCollection = require("../../models/orderModel");

const router = require("express").Router();


const storeId = process.env.STORE_ID;
const storePass = process.env.STORE_PASSWORD;
const isLive = false;

const postPaymentInfo = async (req, res, next) => {
    try {
        const paymentInfo = req.body;



        const uid = new mongoose.Types.ObjectId().toString();



        const data = {
            total_amount: paymentInfo?.subtotal,
            currency: 'USD',
            tran_id: uid, // use unique tran_id for each api call
            success_url: `http://localhost:9000/success/${uid}?id=${paymentInfo?.productIds}`,
            fail_url: 'http://localhost:9000/fail',
            cancel_url: 'http://localhost:9000/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            cus_name: paymentInfo?.name,
            cus_email: paymentInfo?.email,
            products: paymentInfo?.products,
            cus_city: paymentInfo?.city,
            cus_state: paymentInfo?.state,
            cus_country: paymentInfo?.country,
            cus_phone: paymentInfo?.phone,
            shipping_method: 'NO',
            product_name: "NO",
            product_category: "NO",
            product_profile: "NO"
        };

        const sslcz = new SSLCommerzPayment(storeId, storePass, isLive)
        sslcz.init(data).then(apiResponse => {
            const GatewayPageURL = apiResponse.GatewayPageURL;


            res.send({ url: GatewayPageURL });
        });

        const orderDetails = {
            name: paymentInfo?.name,
            phone: paymentInfo?.phone,
            products: paymentInfo?.products,
            address: { street: paymentInfo?.street, state: paymentInfo?.state, city: paymentInfo?.city, country: paymentInfo?.country },
            email: paymentInfo?.email,
            subtotal: paymentInfo?.subtotal,
            transactionId: uid
        }

        const newOrder = orderCollection(orderDetails);
        await newOrder.save();

    }
    catch (error) {
        next(error);
    }
}





module.exports = postPaymentInfo;