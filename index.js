require('dotenv').config();

const express = require('express');
const getData = require('./fetch');
const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT;

app.get('/', async (req, res) =>{
    const food = req.query.food;
    if(food === undefined) return res.render('index', c = []);
    const r = await getData(food);
    return res.render('index', c = r);
    
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

