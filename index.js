const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Getting router
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');

//handling request 
app.use('/products',productsRoute);
app.use('/user',usersRoute);

// mongoose.connect(
//     'mongodb://localhost:27017/commerce',
//     {useNewUrlParser:true,useUnifiedTopology:true}
//     );
// mongoose.set('useCreateIndex',true);
// mongoose.Promise = global.Promise;

app.listen(process.env.PORT,()=> console.log('app is running'));