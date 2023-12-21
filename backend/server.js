var express = require('express')
var dotenv = require('dotenv')
var app = express()
dotenv.config()

var bodyparser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyparser.json())
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)

global.config = require('./Config/dbconfig')

app.get('/',(req,res)=>{
    res.send('hello, world')
})

require('./services/PinjamBukuService')(app, global.config.pool)





app.listen(process.env.PORT, ()=>{
    console.log(`example app litening in port ${process.env.PORT}`);
});