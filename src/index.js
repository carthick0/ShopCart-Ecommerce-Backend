const express = require('express');
const serverConfig = require('./config/server_config');
const ApiRouter = require('./routes/api_routes')
const bodyParser = require("body-parser")
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: serverConfig.DB_HOST,
    user: serverConfig.DB_USER,
    password: serverConfig.DB_PASSWORD,
    database: serverConfig.DB_NAME
})


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', ApiRouter);


app.listen((serverConfig.PORT), () => {
    console.log('Server for shop cart is up at port', serverConfig.PORT);

    db.connect((err) => {
        if (err) {
            console.log("DB didn't connect");
            console.log(err)
        } else {
            console.log("DB connected successfully")
        };

        db.query('Select * from products', (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res)
        })
    });

})