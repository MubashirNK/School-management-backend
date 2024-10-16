const mongoose = require('mongoose')
const config = require('../config');
mongoose.connect(config.mongoURI,{userNewUrlparser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',(err) => {
    console.error(err)
});

db.once('open',() =>{
    console.log("connected to mongoDb")
});