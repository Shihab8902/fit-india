const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    totalReviewers: {
        type: Number,
    },
    averageReview: {
        type: Number,
    }
});


const cartCollection = mongoose.model("cart", cartSchema);

module.exports = cartCollection;