const { sequelize , Level} = require('../models')

const levelController = {
    levelReveal: async (request, response) => {
        const levelShow = await Level.findAll()
    
        response.render("levels", {levelShow})
    }

}
module.exports = levelController