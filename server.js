const express = require('express')
const db = require("./db")
const Employee = require('./models/empModel')
const Project = require('./models/projectModel')
const app = express();

app.use(express.json());

const employeesRoute = require('./routes/empRoute')
const projectsRoute = require('./routes/projectRoutes')
const userRoute = require('./routes/userRoute')

app.use('/api/employees/', employeesRoute)
app.use('/api/projects/',projectsRoute)
app.use('/api/users/', userRoute)

app.get("/", (req,res)=>{
    res.send("server is running")
})


const port = process.env.PORT || 5000;

app.listen(port,()=> 'server running on port')