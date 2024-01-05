const postPaymentInfo = async (req, res, next) => {
    try {
        const data = req.body;
    }
    catch (error) {
        next(error);
    }
}


module.exports = postPaymentInfo;