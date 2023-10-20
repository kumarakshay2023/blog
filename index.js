require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const userRouter = require('./src/routes/user.routes');
const postRouter = require('./src/routes/post.routes');
const fileUploadRouter = require('./src/routes/fileUpload.routes');
const port = process.env.PORT||3030;
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('./src/db/conn')

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(morgan('tiny'));

app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/',fileUploadRouter)




app.listen(port,()=>{
    console.log('listing to port 3030');
})