import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getEmployeeByIdReducer } from "../reducers/empReducer";
import { editEmployee } from "../actions/empAction";
import { editEmployeeReducer } from "../reducers/empReducer";
import { getEmployeeById } from "../actions/empAction";


export default function Editemployee({ match }) {
    const params = useParams();
    const dispatch = useDispatch()
    const [Employeeid, setemployeeid] = useState('')
    const [Name, setname] = useState('')
    const [office, setoffice] = useState('')
    const [Department, setdepartment] = useState('')
    const [Jobstatus, setjobstatus] = useState('')
    const [Jobtitle, setjobtitle] = useState('')


    const employee = useSelector((state) => state.getEmployeeByIdReducer);
    const editemployeestate = useSelector(state => state.editEmployeeReducer)
    const { editloading, editerror, editsuccess } = editemployeestate

    useEffect(() => {

        if (employee) {
            setemployeeid(employee.Employeeid)
            setname(employee.Name)
            setoffice(employee.office)
            setdepartment(employee.Department)
            setjobstatus(employee.Jobstatus)
            setjobtitle(employee.Jobtitle)
        }
        else {
            dispatch(getEmployeeById(params.employeeid))
        }


    }, [employee, dispatch])

    function formHandler(e) {
        e.preventDefault();
        const editedemployee = {
            _id: params.employeeid,
            Employeeid,
            Name,
            office,
            Department,
            Jobstatus,
            Jobtitle
        }
        console.log(editedemployee)
        dispatch(editEmployee(editedemployee))
    }

    return (
        <div>
            <h2>Edit Employee Data</h2>
            <h1>Employee Id: {params.employeeid}</h1>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Employee Id' className='form-control' value={Employeeid} onChange={(e) => { setemployeeid(e.target.value) }} />
                    <input required type="text" placeholder='Name' className='form-control' value={Name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder='Office' className='form-control' value={office} onChange={(e) => { setoffice(e.target.value) }} />
                    <input required type="text" placeholder='Department' className='form-control' value={Department} onChange={(e) => { setdepartment(e.target.value) }} />
                    <input required type="text" placeholder='Job Status' className='form-control' value={Jobstatus} onChange={(e) => { setjobstatus(e.target.value) }} />
                    <input required type="text" placeholder='Job Title' className='form-control' value={Jobtitle} onChange={(e) => { setjobtitle(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Edit Item</button>
                </form>
            </div>
        </div>
    )
}