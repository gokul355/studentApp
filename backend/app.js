const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db')
const path = require('path');
const { log } = require('console');
const app = express()
app.use(bodyParser.urlencoded({external:false}))
app.use(express.json())
app.get('/getData')

app.post('/addNew',(req,res,next) => {
    const data = req.body.data
    db.query(`insert into student(firstname.lastname,mailId,phoneno.gender,addressline1.addressline2,city,state,postalcode.country) values ()`)
})
app.listen(3000)
