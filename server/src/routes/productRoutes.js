const getBestSellingProducts = require("../controllers/Product/getBestSellingProducts");
const getNewProducts = require("../controllers/Product/getNewProducts");
const { getAllProducts } = require("../controllers/Product/getProducts");
const getSingleProduct = require("../controllers/Product/getSingleProduct");
const getTopRatedProducts = require("../controllers/Product/getTopRatedProducts");
const router = require("express").Router();


//Get all products
router.get("/api/products", getAllProducts);
//Get top rated products
router.get("/api/topRated", getTopRatedProducts);
//Get new products
router.get("/api/newProducts", getNewProducts);
//Get best selling products
router.get("/api/bestSelling", getBestSellingProducts);
//Get a product
router.get("/api/product", getSingleProduct);



module.exports = router;