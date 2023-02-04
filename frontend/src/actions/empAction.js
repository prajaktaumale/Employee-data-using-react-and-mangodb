import axios from 'axios'


export const getAllEmp=()=>async dispatch=>{

    dispatch({type:'GET_EMP_REQUEST'})

    try {
       const response = await axios.get('/api/employees/getallemployees')
       console.log(response)
       dispatch({type:'GET_EMP_SUCCESS', payload : response.data}) 
    } catch (error) {
        dispatch({type:'GET_EMP_FAILED', payload:error})
    }
}

export const addEmployees=(employee)=>async dispatch=>{

    dispatch({type:'ADD_EMP_REQUEST'})
    try {
        const response = await axios.post('/api/employees/addemployees',{employee})
        console.log(response) 
        alert('New Item Added Successfully')
        dispatch({type:'ADD_EMP_SUCCESS'})
        window.location.href='/admin/employeelist'
    } catch (error) {
        dispatch({type:'ADD_EMP_FAILED', payload: error})
    }

}

export const deleteEmployee=(employeeid)=>async dispatch=>{

    try {
       const response= await axios.post('/api/employees/deleteemployee', {employeeid})
       alert('Employee Deleted Successfully')
       console.log(response)
       window.location.reload() //to reload the homescreen if we don't write this statment then we need to fetch the data one more time
    } catch (error) {
        alert('something went wrong')
        console.log(error)
    }
}

export const getEmployeeById = (employeeid)=>async dispatch=>{

    dispatch({type:'GET_EMPBYID_REQUEST'})

    try {
        const response = await axios.post('/api/employees/getemployeebyid',{employeeid})
        console.log(response)
        dispatch({type:'GET_EMPBYID_SUCCESS', payload :response.data})
    } catch (error) {
        dispatch({type:'GET_EMPBYID_FAILED', payload:error})
    }
}

export const editEmployee=(editedemployee)=>async dispatch=>{

    dispatch({type:'EDIT_EMPS_REQUEST'})
    try {
        const response = await axios.post('/api/employees/editemployee',{editedemployee})
        console.log(response) 
        alert('Employee Edited Successfully')
        dispatch({type:'EDIT_EMPS_SUCCESS'})
        window.location.href='/admin/employeelist'
    } catch (error) {
        dispatch({type:'EDIT_EMPS_FAILED', payload: error})
    }

}