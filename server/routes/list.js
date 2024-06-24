const express = require('express');
const uuid = require('uuid').v4;
const fs = require('fs');
const data = require('../data.json')
const router = express.Router();
function getIndex(data, id) {
    return data.findIndex( x => x.id === id );
}
router.get('/',(req , res) => {
    res.json(data);
})
router.post('/', (req, res) => {
    req.body.id = uuid()
    data.push(req.body)
    console.log(JSON.stringify(data));
    fs.writeFileSync('../data.json', JSON.stringify(data));
    res.json(data);
})
router.put('/', (req, res) => {
    const {id, status} = req.body; 
    const index = getIndex(data, id);
    data[index].status = status;
    fs.writeFileSync('../data.json', JSON.stringify(data));
    res.json(data)
})
router.delete('/', (req, res) => {
    const {id} = req.body;
    const index = getIndex(data, id);
    data.splice(index);
    fs.writeFileSync('../data.json', JSON.stringify(data));
    res.json(data);
})
module.exports = router;