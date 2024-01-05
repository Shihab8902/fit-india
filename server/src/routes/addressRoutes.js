const deleteAddress = require("../controllers/Address/deleteAddress");
const getAddress = require("../controllers/Address/getAddress");
const postAddress = require("../controllers/Address/postAddress");
const updateAddress = require("../controllers/Address/updateAddress");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/api/address", verifyToken, getAddress);

router.post("/api/address", verifyToken, postAddress);

router.put("/api/address", verifyToken, updateAddress);

router.delete("/api/address", verifyToken, deleteAddress);


module.exports = router;