const express = require('express');
const serverConfig = require('./config/serverConfig');
const ApiRouter = require('./routes/apiRouter')


const app = express();

app.use('/api', ApiRouter);


app.listen((serverConfig.PORT), () => {
    console.log('Server for shop cart is up at port', serverConfig.PORT)
})