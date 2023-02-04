import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addEmployees } from "../actions/empAction";


export default function Addpizza() {
    const [Employeeid, setemployeeid] = useState('')
    const [Name, setname] = useState('')
    const [office, setoffice] = useState('')
    const [Department, setdepartment] = useState('')
    const [Jobstatus, setjobstatus] = useState('')
    const [Jobtitle, setjobtitle] = useState('')
    const dispatch = useDispatch()


    function formHandler(e) {
        e.preventDefault();
        const employee = {
            Employeeid,
            Name,
            office,
            Department,
            Jobstatus,
            Jobtitle
        }
        console.log(employee)
        dispatch(addEmployees(employee))

    }

    return (
        <div>
            <h2>Add Employee</h2>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Employee Id' className='form-control' value={Employeeid} onChange={(e) => { setemployeeid(e.target.value) }} />
                    <input required type="text" placeholder='Name' className='form-control' value={Name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder='Office' className='form-control' value={office} onChange={(e) => { setoffice(e.target.value) }} />
                    <input required type="text" placeholder='Department' className='form-control' value={Department} onChange={(e) => { setdepartment(e.target.value) }} />
                    <input required type="text" placeholder='Job Status' className='form-control' value={Jobstatus} onChange={(e) => { setjobstatus(e.target.value) }} />
                    <input required type="text" placeholder='Job Title' className='form-control' value={Jobtitle} onChange={(e) => { setjobtitle(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Add Item</button>
                </form>
            </div>
        </div>
    )
}