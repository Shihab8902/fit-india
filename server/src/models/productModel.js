const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    averageRating: {
        type: Number,
        default: 0
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    regularPrice: {
        type: Number,
    },
    category: {
        type: String,
        required: true
    },
    soldQuantity: {
        type: Number,
        default: 0
    },
    customerReviews: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});


const productCollection = mongoose.model("products", productSchema);

module.exports = productCollection;