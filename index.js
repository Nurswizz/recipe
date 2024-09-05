require('dotenv').config();

const express = require('express');
const getData = require('./fetch');
const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT;

app.get('/', async (req, res) =>{
    const food = req.query.food;
    if(food === undefined) return res.render('index', {c :[], err : ""});
    const r = await getData(food);
    console.log(r);
    if (r.length === 0) return res.render('index', {c: [], err: "There is no such kind of food" });
    return res.render('index', {c: r, err: ""});
    
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

