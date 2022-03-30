const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('mongodb+srv://UserAdmin:matheus2207@fiaptecnico.ekwgy.mongodb.net/test')
}

module.exports = conexao