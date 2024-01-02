const getCartItems = require("../controllers/Cart/getCartItems");
const postCartItem = require("../controllers/Cart/postNewCartItem");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/api/cart", verifyToken, getCartItems)

router.post("/api/cart", verifyToken, postCartItem);




module.exports = router;