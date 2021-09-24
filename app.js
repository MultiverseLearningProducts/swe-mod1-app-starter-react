const express = require('express');

const {sequelize} = require('./db');
const {Product} = require('./models/index');



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

app.get('/products', async (req, res) => {
    const products= await Product.findAll()
    res.json(products)
})

app.get('/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    res.json({product})
})


app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})