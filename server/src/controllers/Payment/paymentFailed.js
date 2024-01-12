const paymentFailed = (req, res) => {
    res.redirect("http://localhost:5173/fail");
}


module.exports = paymentFailed;