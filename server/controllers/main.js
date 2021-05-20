const itemDb = require('../schemas/schema')


module.exports = {
    upload: async (req, res) => {

        let newItem = new itemDb.itemsSchema
        newItem.name = req.body.name
        newItem.quantity = req.body.quantity
        newItem.price = req.body.price
        newItem.save().then(() => {
            res.send({error: false, message: 'Inventory successfully added'})
        }).catch(e => {
            res.send({error: true, message: e})
            console.log(e)
        })
    },
    storage: async (req, res) => {
        let items = await itemDb.itemsSchema.find()
        res.send(items)
    },
    add: async (req, res) => {
        let item = await itemDb.itemsSchema.find({_id: req.params.id})
        console.log(item[0])
        let quantity = item[0].quantity + 1
        await itemDb.itemsSchema.findByIdAndUpdate({_id: req.params.id}, {
            quantity: quantity
        })
        res.send({error: false, message: 'Uploaded'})
    },
    remove: async (req, res) => {
        let item = await itemDb.itemsSchema.find({_id: req.params.id})
        let quantity = item[0].quantity - 1
        await itemDb.itemsSchema.findByIdAndUpdate({_id: req.params.id}, {
            quantity: quantity
        })
        res.send({error: false, message: 'Uploaded'})
    },
    delete: async (req, res) => {
        await itemDb.itemsSchema.findOneAndDelete({_id: req.params.id})
        await itemDb.itemsSchema.findOneAndDelete({recipeId: req.params.id})
        res.send({error: false, message: "Inventory item deleted"})
    },
}