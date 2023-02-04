const express = require('express');
const router = express.Router();
const Employee = require('../models/empModel')

router.get("/getallemployees", async (req, res) => {
    try {
        const employees = await Employee.find({})
        res.send(employees)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error })
    }
})

router.post("/addemployees", async (req, res) => {
    const employee = req.body.employee
    try {
        const newemployee = new Employee({
            Employeeid: employee.Employeeid,
            Name: employee.Name,
            office: employee.office,
            Department: employee.Department,
            Jobstatus: employee.Jobstatus,
            Jobtitle: employee.Jobtitle
        })
        await newemployee.save()
        res.send('new employee added successfully')
    } catch (error) {
        return res.status(400).json({ message: error })

    }
})

router.post("/deleteemployee", async(req,res)=>{
    const employeeid = req.body.employeeid
    try {
        await Employee.findOneAndDelete({_id:employeeid})
        res.send('Employee deleted successfully')
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/getemployeebyid", async(req,res)=>{
    const employeeid = req.body.employeeid
    try {
        const employee = await Employee.findOne({_id: employeeid})
        res.send(employee)
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})

router.post("/editemployee", async (req,res)=>{
    const editedemployee = req.body.editedemployee
    try {
        const employee =await Employee.findOne({_id : editedemployee._id})
        employee.Employeeid = editedemployee.Employeeid,
        employee.Name = editedemployee.Name,
        employee.office = editedemployee.office,
        employee.Department = editedemployee.Department,
        employee.Jobstatus = editedemployee.Jobstatus,
        employee.Jobtitle = editedemployee.Jobtitle,
        await employee.save()
        res.send('Employee edited successfully')
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})


module.exports = router