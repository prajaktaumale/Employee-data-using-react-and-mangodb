const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel')

router.get("/getallprojects", async (req, res) => {
    try {
        const projects = await Project.find({})
        res.send(projects)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error })
    }
})

router.post("/addprojects", async (req, res) => {
    const project = req.body.project
    try {
        const newproject = new Project({
            Task : project.Task,
            Assignedto : project.Assignedto,
            Phase : project.Phase,
            Status : project.Status,
            Payment : project.Payment
        })
        await newproject.save()
        res.send('new Project added successfully')
    } catch (error) {
        return res.status(400).json({ message: error })

    }
})

router.post("/deleteproject", async(req,res)=>{
    const projectid = req.body.projectid
    try {
        await Project.findOneAndDelete({_id:projectid})
        res.send('Project deleted successfully')
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/getprojectbyid", async(req,res)=>{
    const projectid = req.body.projectid
    try {
        const project = await Project.findOne({_id: projectid})
        res.send(project)
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})

router.post("/editproject", async (req,res)=>{
    const editedproject = req.body.editedproject
    try {
        const project =await Project.findOne({_id : editedproject._id})
        project.Task = editedproject.Task
        project.Assignedto = editedproject.Assignedto,
        project.Phase = editedproject.Phase,
        project.status = editedproject.status,
        project.Payment = editedproject.Payment
        await project.save()
        res.send('Project edited successfully')
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})


module.exports = router