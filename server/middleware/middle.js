const itemDB = require('../schemas/schema');



module.exports = {

    validator: async (req, res, next) => {

        const {name, age, email, password} = req.body

        function send(error, message) {
            res.send({error: error, message: message})
        }
        if (name.length === 0 ) {
            return send(true, '! Prašome įvesti vartotojo vardą')
        }
        if (age.length === 0) {
            return send(true, '! Prašome įvesti vartotojo amžių')
        }
        if (email.length === 0) {
            return send(true, '! Prašome įvesti vartotojo el. paštą')
        }
        if (!email.includes('@')) {
            return send(true, '! Prašome įvesti teisingą el. paštą')
        }
        if (password.length === 0) {
            return send(true, '! Prašome įvesti vartotojo slaptažodį')
        }

        next()

    },


}