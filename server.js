const express = require('express');
const app = express();
const port =4000;

const routes = require('./route');

app.use('/',routes);

app.listen(port,()=>{
    console.log(`success! the Application is running on port ${port}.`);
});