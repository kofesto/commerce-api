const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const bodyParser = require('body-parser');

dotenv.config();

app.use(express.urlencoded({extended:false}));
//app.use(bodyParser.json({limit:"30mb",extended:true}));
//app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const DB = process.env.MONGO_DB; // database connection
mongoose.connect(
    DB,
    {useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=>app.listen(port,()=>console.log(`server running on port: ${port}`)))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.Promise = global.Promise;


//Getting router
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');

//handling request 
app.use('/products',productsRoute);
app.use('/user',usersRoute);



//app.listen(process.env.PORT,()=> console.log('app is running'));