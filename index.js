const express = require('express');
const search = require('./fetch');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) =>{
    res.send(search(chicken));
    
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

