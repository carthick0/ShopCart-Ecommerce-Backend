const express = require('express');
const serverConfig = require('./config/server_config');
const ApiRouter = require('./routes/api_routes');
const bodyParser = require("body-parser");
const db = require('./config/db_config');
const cookieParser = require('cookie-parser');
const { syncDbInOrder } = require('./models');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', ApiRouter);

app.listen(serverConfig.PORT, async() => {
    console.log('Server for shop cart is up at port', serverConfig.PORT);
    if (serverConfig.NODE_ENV === 'dev') {
        if (serverConfig.DB_FORCE === true) {
            await db.sync({ force: true });
        } else if (serverConfig.DB_ALTER === true) {
            await db.sync({ alter: true });
        } else {
            await db.sync()
        }
    }
    if (serverConfig.NODE_ENV === 'production') {
        syncDbInOrder()
    }



});