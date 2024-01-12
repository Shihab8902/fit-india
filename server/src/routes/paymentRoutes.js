const router = require("express").Router();



const paymentCancel = require("../controllers/Payment/paymentCancel");
const paymentFailed = require("../controllers/Payment/paymentFailed");
const afterPaymentSuccess = require("../controllers/Payment/paymentSuccess");
const postPaymentInfo = require("../controllers/Payment/postPaymentInfo");
const verifyToken = require("../middlewares/verifyToken");




//Post payment info
router.post("/api/sslInit", verifyToken, postPaymentInfo);

//Payment success
router.post("/success/:id", afterPaymentSuccess);

//Payment cancelled
router.post("/cancel", paymentCancel);

//Payment failed
router.post("/fail", paymentFailed);




module.exports = router;
