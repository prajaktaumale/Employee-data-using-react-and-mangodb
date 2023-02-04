import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getProjectByIdReducer } from "../reducers/projectReducer";
import { editProject, getProjectById } from "../actions/projectAction";


export default function Editproject({ match }) {
    const params = useParams();
    const dispatch = useDispatch()
    const [Task, settask] = useState('')
    const [Assignedto, setassignedto] = useState('')
    const [Phase, setphase] = useState('')
    const [Status, setstatus] = useState('')
    const [Payment, setpayment] = useState('')


    const project = useSelector((state) => state.getProjectByIdReducer);
    const editemployeestate = useSelector(state => state.editEmployeeReducer)
    const { editloading, editerror, editsuccess } = editemployeestate

    useEffect(() => {

        if (project) {
            settask(project.Task)
            setassignedto(project.Assignedto)
            setphase(project.Phase)
            setstatus(project.Status)
            setpayment(project.Payment)
        }
        else {
            dispatch(getProjectById(params.projectid))
        }


    }, [project, dispatch])

    function formHandler(e) {
        e.preventDefault();
        const editedproject = {
            _id: params.projectid,
            Task,
            Assignedto,
            Phase,
            Status,
            Payment
        }
        console.log(editedproject)
        dispatch(editProject(editedproject))
    }

    return (
        <div>
            <h2>Edit Project Data</h2>
            <h1>Project Id: {params.projectid}</h1>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Task' className='form-control' value={Task} onChange={(e) => { settask(e.target.value) }} />
                    <input required type="text" placeholder='Assigned To' className='form-control' value={Assignedto} onChange={(e) => { setassignedto(e.target.value) }} />
                    <input required type="text" placeholder='Phase' className='form-control' value={Phase} onChange={(e) => { setphase(e.target.value) }} />
                    <input required type="text" placeholder='Status' className='form-control' value={Status} onChange={(e) => { setstatus(e.target.value) }} />
                    <input required type="text" placeholder='Payment' className='form-control' value={Payment} onChange={(e) => { setpayment(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Edit Item</button>
                </form>
            </div>
        </div>
    )
}