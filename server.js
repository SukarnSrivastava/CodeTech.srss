const express = require('express')
const path= require("path");
const app = express()
const env=require('dotenv').config();

const port = process.env.PORT;
app.use(express.static('./public'));
app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname,'./index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})

