const generateToken = require("../controllers/Authentication/generateToken");

const router = require("express").Router();


router.post("/auth/jwt", generateToken);


module.exports = router;