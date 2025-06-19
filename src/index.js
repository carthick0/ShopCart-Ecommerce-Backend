const express = require('express');
const serverConfig = require('./config/server_config');
const ApiRouter = require('./routes/api_routes')
const bodyParser = require("body-parser")

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', ApiRouter);


app.listen((serverConfig.PORT), () => {
    console.log('Server for shop cart is up at port', serverConfig.PORT)
})