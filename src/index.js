const express = require('express');
const app = express();

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/routes'));

app.listen(4000);
console.log('Server on port 4000');
