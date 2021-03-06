const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');



dotenv.config({path: './config/config.env'})
connectDB();
const app = express();
const transactions = require('./routes/transactions')

app.use('/api/v1/transactions',transactions )



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is runnig on ${process.env.NODE_ENV} mode and on ${PORT} port`.yellow.bold))