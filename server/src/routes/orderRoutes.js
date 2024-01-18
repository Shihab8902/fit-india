const getUserSpecificOrder = require("../controllers/order/getUserSpecificOrders");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();


router.get("/api/orders", verifyToken, getUserSpecificOrder);


module.exports = router;