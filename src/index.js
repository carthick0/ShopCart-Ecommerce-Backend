const express = require('express');
const serverConfig = require('./config/server_config');
const ApiRouter = require('./routes/api_routes')
const bodyParser = require("body-parser")
const db = require('./config/db_config');
const Category = require('./models/category');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', ApiRouter);


app.listen((serverConfig.PORT), async() => {
    console.log('Server for shop cart is up at port', serverConfig.PORT);
    await db.sync()
    console.log('DB connected')
    const res = await Category.create({
        name: 'Electronics',
        description: 'Category of Electronics products'
    });
    console.log(res)
})