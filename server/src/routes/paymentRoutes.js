const router = require("express").Router();
require("dotenv").config();
const SSLCommerzPayment = require('sslcommerz-lts');
const postPaymentInfo = require("../controllers/Payment/postPaymentInfo");
const verifyToken = require("../middlewares/verifyToken");
const storeId = process.env.STORE_ID;
const storePass = process.env.STORE_PASSWORD;
const isLive = false;



//Post payment info
router.post("/api/sslInit", verifyToken, postPaymentInfo);



module.exports = router;
