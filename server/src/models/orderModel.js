const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "unpaid"
    },
    orderedAt: {
        type: Date,
        default: new Date()
    }
});


const orderCollection = mongoose.model("order", orderSchema);


module.exports = orderCollection;