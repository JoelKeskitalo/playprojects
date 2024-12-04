const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    flavour: {
        type: String,
        required: true
    },
    strength: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order