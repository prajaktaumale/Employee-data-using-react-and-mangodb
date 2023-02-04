import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addProjects } from "../actions/projectAction";

export default function Addproject() {
    const [Task, settask] = useState('')
    const [Assignedto, setassignedto] = useState('')
    const [Phase, setphase] = useState('')
    const [Status, setstatus] = useState('')
    const [Payment, setpayment] = useState('')
    const dispatch = useDispatch()


    function formHandler(e) {
        e.preventDefault();
        const project = {
            Task,
            Assignedto,
            Phase,
            Status,
            Payment
        }
        console.log(project)
        dispatch(addProjects(project))

    }

    return (
        <div>
            <h2>Add Projects</h2>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Task' className='form-control' value={Task} onChange={(e) => { settask(e.target.value) }} />
                    <input required type="text" placeholder='Assigned To' className='form-control' value={Assignedto} onChange={(e) => { setassignedto(e.target.value) }} />
                    <input required type="text" placeholder='Phase' className='form-control' value={Phase} onChange={(e) => { setphase(e.target.value) }} />
                    <input required type="text" placeholder='Status' className='form-control' value={Status} onChange={(e) => { setstatus(e.target.value) }} />
                    <input required type="text" placeholder='Payment' className='form-control' value={Payment} onChange={(e) => { setpayment(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Add Item</button>
                </form>
            </div>
        </div>
    )
}