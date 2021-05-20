const userDB = require('../schemas/schema')


module.exports = {

    upload: async (req, res) => {

        let newUser = new userDB.userSchema
        newUser.name = req.body.name
        newUser.age = req.body.age
        newUser.email = req.body.email
        newUser.password = req.body.password
        newUser.save().then(() => {
            res.send({error: false, message: 'Vartotojas sekmingai įvestas'})
        }).catch(e => {
            res.send({error: true, message: e})
            console.log(e)
        })
    },
    storage: async (req, res) => {
        let users = await userDB.userSchema.find()
        res.send(users)
    },

    delete: async (req, res) => {
        await userDB.userSchema.findOneAndDelete({_id: req.params.id})
        res.send({error: false, message: "Vartotojas panaikintas!"})
    },
}