const { getAllProducts } = require("../controllers/Product/getProducts");
const router = require("express").Router();


//Get all products
router.get("/api/products", getAllProducts);



module.exports = router;