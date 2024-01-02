const userCollection = require("../../models/userModel");

const saveUser = async (req, res, next) => {
    try {
        const user = req.body;
        const filter = { email: user?.email };
        const isExist = await userCollection.findOne(filter);
        if (!isExist) {
            const newUser = userCollection(user);
            const result = await newUser.save();
            return res.status(200).send({ message: result });
        }
        return res.status(409).send({ message: "User already exist!" });
    }
    catch (error) {
        next(error);
    }
}



module.exports = saveUser;