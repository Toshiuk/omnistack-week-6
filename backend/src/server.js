const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-nwedj.mongodb.net/omnistack?retryWrites=true', {

})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

app.listen(3333);