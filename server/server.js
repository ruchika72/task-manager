const express = require('express');
const router = require('./routes/list');
const app = express();
app.use(express.json());             // for application/json
app.use(express.urlencoded());       // for application/x-www-form-urlencoded
app.get('/',(req, res) => {
    return res.send('okay');
});
app.use('/list', router);
app.listen(3000);
