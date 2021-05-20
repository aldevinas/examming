const itemDb = require('../schemas/schema');



module.exports = {

    validator: async (req, res, next) => {

        const {name, quantity, price} = req.body

        function send(error, message) {
            res.send({error: error, message: message})
        }
        if (quantity.length === 0) {
            return send(true, 'Please, add title name in field')
        }
        if (name.length < 3 ) {
            return send(true, 'Title name must heave more then 3 symbols')
        }
        if (name.length > 50) {
            return send(true, 'Title name must heave less then 3 symbols')
        }
        if (price.length === 0) {
            return send(true, 'Please, add price in field')
        }
        if ((!/[^1-9]/.test(name))) {
            return send(true, 'Title must have letters!')
        }
        if ((!/[^a-zA-Z]/.test(quantity))) {
            return send(true, 'Quantity must heave number value')
        }
        if ((!/[^a-zA-Z]/.test(price))) {
            return send(true, 'Price must heave number value')
        }
        next()

    },

    checkQuantity: async (req, res, next) => {
        let item = await itemDb.itemsSchema.find({_id: req.params.id})

        if (item[0].quantity === 0) {
            return res.send({error: true, message: 'There is no Inventory'})
        }
        next()
    }
}