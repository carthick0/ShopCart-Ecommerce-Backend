const express = require('express');
const serverConfig = require('./config/server-config');
const ApiRouter = require('./routes/api-routes')


const app = express();

app.use('/api', ApiRouter);


app.listen((serverConfig.PORT), () => {
    console.log('Server for shop cart is up at port', serverConfig.PORT)
})