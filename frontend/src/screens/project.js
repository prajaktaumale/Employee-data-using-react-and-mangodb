import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getAllProjectReducers } from '../reducers/projectReducer'
import { getAllProject } from '../actions/projectAction'
import { deleteProject } from "../actions/projectAction";

export default function Projects() {

    const dispatch = useDispatch()
    const projectsstate = useSelector(state => state.getAllProjectReducers)
    const { projects } = projectsstate
    useEffect(() => {
        dispatch(getAllProject())
    }, [])
    return (
        <div>
            <h2>Project List</h2>
            <table className="table table-striped table-dark table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Task</th>
                        <th>Assigned To</th>
                        <th>Phase</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects && projects.map(project => {
                        return <tr>
                            <td>{project.Task}</td>
                            <td>{project.Assignedto}</td>
                            <td>{project.Phase}</td>
                            <td>{project.Status}</td>
                            <td>{project.Payment}</td>
                            <td>
                                <i class="fa-solid fa-trash" style={{ color: 'red' }} onClick={()=>{dispatch(deleteProject(project._id))}}></i>  <br />
                                <Link to={`/admin/editproject/${project._id}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'blue' }}></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}