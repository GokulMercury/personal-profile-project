const express = require('express');
const app = express();

const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (()=>console.log("MongoDB Connected"))
.catch ((error)=>{console.log(error)})

app.use(cors());

//PARSING
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SANITIZE
app.use(xss());
app.use(mongoSanitize());

//ROUTES
app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})