const Order = require('../models/orderModel')

exports.createOrder = async (req, res) => {
    try {
        const order = req.body

        if (!order.name || !order.flavour || !order.strength || !order.price) {
            return res.status(400).json({
                message: 'Fill in all the required fields'
            })
        }

        const newOrder = new Order({
            name: order.name,
            flavour: order.flavour,
            strength: order.strength,
            price: order.price,
        })

        await newOrder.save()

        res.status(200).json({
            message: 'Order created successfully!',
            order: newOrder
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()

        if (orders.length === 0) {
            res.status(204).json({
                message: 'There are no orders in the database'
            })
        }

        res.status(200).json({
            message: 'All orders in the database: ',
            orders: orders
        })


    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


