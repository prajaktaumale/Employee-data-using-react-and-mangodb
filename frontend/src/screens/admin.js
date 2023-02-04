import React, { useEffect } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export default function Adminscreen() {

    // const userstate = useSelector(state => state.adminRegisterReducer)
    // const { currentUser } = userstate
    // const dispatch = useDispatch()

    return (
        <div>
            <div className='row justify-content-center p-3'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className='admin-access'>
                        <li><a href='/admin/employeelist'>Employee List</a></li>
                        <li><a href='/admin/addemployee'>Add New Employee</a></li>
                        <li><a href='/admin/projectlist'>Projects List</a></li>
                        <li><a href='/admin/addproject'>Add New Project</a></li>
                        <li><a href='/admin/sales'>Sales</a></li>
                    </ul>
                    {/* here outlet is important as we created an nested router */}
                    <Outlet />
                </div>
            </div>
        </div >
    )
}