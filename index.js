require('dotenv').config();
const express = require('express');
const userRouter = require('./src/routes/user.routes');
const postRouter = require('./src/routes/post.routes');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('./src/db/conn')

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/user',userRouter);
app.use('/post',postRouter);





app.listen(3030,()=>{
    console.log('listing to port 3030');
})