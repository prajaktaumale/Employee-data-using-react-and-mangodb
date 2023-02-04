const mongoose = require('mongoose');

var MONGO_URL = 'mongodb+srv://prajaktaumale:umale123@cluster0.kclg3kv.mongodb.net/employees-data'

mongoose.connect(MONGO_URL, {useUnifiedTopology:true, useNewUrlParser:true})

var db= mongoose.connection

db.on('connected',()=>{
    console.log('mongo connected successfully')
})
db.on('error',()=>{
    console.log('mongo connection failed')
})

module.exports= mongoose