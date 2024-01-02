const saveUser = require("../controllers/User/saveUser");

const router = require("express").Router();

router.post("/api/user", saveUser);


module.exports = router;