import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { deleteEmployee, getAllEmp } from "../actions/empAction";
import { getAllEmpReducers } from "../reducers/empReducer";

export default function Employeelist() {

    const dispatch = useDispatch()
    const employeesstate = useSelector(state => state.getAllEmpReducers)
    const { employees } = employeesstate
    useEffect(() => {
        dispatch(getAllEmp())
    }, [])
    return (
        <div>
            <h2>Employee List</h2>
            <table className="table table-striped table-dark table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Office</th>
                        <th>Department</th>
                        <th>Job Status</th>
                        <th>Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employee => {
                        return <tr>
                            <td>{employee.Employeeid}</td>
                            <td>{employee.Name}</td>
                            <td>{employee.office}</td>
                            <td>{employee.Department}</td>
                            <td>{employee.Jobstatus}</td>
                            <td>{employee.Jobtitle}</td>
                            <td>
                                <i class="fa-solid fa-trash" style={{ color: 'red' }} onClick={()=>{dispatch(deleteEmployee(employee._id))}}></i>  <br />
                                <Link to={`/admin/editemployee/${employee._id}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'blue' }}></i></Link>
                    
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}