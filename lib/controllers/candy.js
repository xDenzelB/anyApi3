const { Router } = require('express');
const Candy = require('../models/Candy');
// const pool = require('../utils/pool');

module.exports = Router()
.post('/', async (req, res) => {
    const candy = await Candy.insert(req.body);
    res.send(candy);
})

.get('/:id', async (req, res) => {
    const candy = await Candy.getById(req.params.id);
    res.send(candy);
})

.get('/', async (req, res) => {
    const candy = await Candy.getAll();
    res.send(candy);
})

.patch('/:id', async(req, res) => {
    const candy = await Candy.updateById(req.params.id, req.body);
    res.send(candy);
})

.delete('/:id', async (req, res) => {
    const candy = await Candy.deleteById(req.params.id);
    res.send(candy);
});