const express = require('express');
const app = express();
const sequelize = require('./util/database');
const expensetracker = require('./models/expensetracker');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());

const expensetrackerRoutes = require('./routes/expensetracker');
app.use('/expensetracker', expensetrackerRoutes);










sequelize.sync().then(result =>{
    app.listen(4000);
}).catch(err =>{
    console.log(err);
})