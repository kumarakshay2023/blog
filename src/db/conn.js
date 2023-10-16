const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to database');
}).catch(error=>{
    console.log('connection error',error);
})