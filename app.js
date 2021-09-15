const express = require('express');

const {sequelize} = require('./db');
const {Plant} = require('./models');

const seed = require('./seed')

const PORT = process.env.PORT || 3000;

const app = express();

//Allow CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// serve static assets from the public/ folder
app.use(express.static('public'));



seed();

app.get('/plants', async (req, res) => {
    const plants= await Plant.findAll()
    res.json(plants)
})

app.get('/plants/:id', async (req, res) => {
    const plant = await Plant.findByPk(req.params.id)
    res.json({plant})
})

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})