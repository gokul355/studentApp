const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db')
const path = require('path');
const { log } = require('console');
const app = express()
app.use(bodyParser.urlencoded({external:false}))
app.use(express.json())
app.get('/getData', (req,res,next) => {
    const data = []
    db.query( `select * from student `,(err,result) => {
        data = result
    } 
    )
    res.send(data)
})

app.post('/addNew',(req,res,next) => {
    const data = req.body.data
    db.query(`insert into student(firstname.lastname,mailId,phoneno.gender,addressline1.addressline2,city,state,postalcode.country) values (data.fname,data.lname,data.md,data.pno,data.dob,data,gender,data.adl1,data.adl2,data.cty,data.state,data.pc,data.cntry)`, (ree,result) => {
        console.log(result);
    })
})
app.listen(3000)
