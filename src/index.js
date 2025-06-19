const express = require('express');
const serverConfig = require('./config/serverConfig');
const pingRoutes = require('./routes/pingRoutes')


const app = express();

app.use('/api/v1/ping', pingRoutes)
app.listen((serverConfig.PORT), () => {
    console.log('Server for shop cart is up at port', serverConfig.PORT)
})