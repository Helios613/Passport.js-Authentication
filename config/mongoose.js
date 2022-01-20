const mongoose = require('mongoose');
mongoose.connect('MONGO-DB CONNECT STRING');
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Successfully connected to database');
    
})