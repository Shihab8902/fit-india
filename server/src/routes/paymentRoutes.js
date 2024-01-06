const router = require("express").Router();



const afterPaymentSuccess = require("../controllers/Payment/paymentSuccess");
const postPaymentInfo = require("../controllers/Payment/postPaymentInfo");
const verifyToken = require("../middlewares/verifyToken");




//Post payment info
router.post("/api/sslInit", verifyToken, postPaymentInfo);


router.post("/success/:id", afterPaymentSuccess);




module.exports = router;
