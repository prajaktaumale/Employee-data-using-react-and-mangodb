import axios from 'axios'
export const getAllProject=()=>async dispatch=>{

    dispatch({type:'GET_PROJECT_REQUEST'})

    try {
       const response = await axios.get('/api/projects/getallprojects')
       console.log(response)
       dispatch({type:'GET_PROJECT_SUCCESS', payload : response.data}) 
    } catch (error) {
        dispatch({type:'GET_PROJECT_FAILED', payload:error})
    }
}

export const addProjects=(project)=>async dispatch=>{

    dispatch({type:'ADD_PROJECT_REQUEST'})
    try {
        const response = await axios.post('/api/projects/addprojects',{project})
        console.log(response) 
        alert('New Project Added Successfully')
        dispatch({type:'ADD_PROJECT_SUCCESS'})
        window.location.href='/admin/projectlist'
    } catch (error) {
        dispatch({type:'ADD_PROJECT_FAILED', payload: error})
    }

}

export const deleteProject=(projectid)=>async dispatch=>{

    try {
       const response= await axios.post('/api/projects/deleteproject', {projectid})
       alert('Project Deleted Successfully')
       console.log(response)
       window.location.reload() //to reload the homescreen if we don't write this statment then we need to fetch the data one more time
    } catch (error) {
        alert('something went wrong')
        console.log(error)
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

export const getProjectById = (projectid)=>async dispatch=>{

    dispatch({type:'GET_PROBYID_REQUEST'})

    try {
        const response = await axios.post('/api/projects/getprojectbyid',{projectid})
        console.log(response)
        dispatch({type:'GET_PROBYID_SUCCESS', payload :response.data})
    } catch (error) {
        dispatch({type:'GET_PROBYID_FAILED', payload:error})
    }
}

export const editProject=(editedproject)=>async dispatch=>{

    dispatch({type:'EDIT_PROJECT_REQUEST'})
    try {
        const response = await axios.post('/api/projects/editproject',{editedproject})
        console.log(response) 
        alert('Project Edited Successfully')
        dispatch({type:'EDIT_PROJECT_SUCCESS'})
        window.location.href='/admin/projectlist'
    } catch (error) {
        dispatch({type:'EDIT_PROJECT_FAILED', payload: error})
    }

}