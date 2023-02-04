export const getAllEmpReducers=(state={},action)=>{

    switch(action.type)
    {
        case 'GET_EMP_REQUEST':return{
            ...state
        }
        case 'GET_EMP_SUCCESS':return{
            employees: action.payload
        }
        case 'GET_EMP_FAILED':return{
            error:action.payload
        }
        default : return state
    }
}

export const addEmployeeReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'ADD_EMP_REQUEST': return{
            loading :true,
            ...state
        }
        case 'ADD_EMP_SUCCESS': return{
            loading : false,
            success : true
        }
        case 'ADD_EMP_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}

export const getEmployeeByIdReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'GET_EMPBYID_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_EMPBYID_SUCCESS': return{
            loading : false,
            employee : action.payload
        }
        case 'GET_EMPBYID_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}


export const editEmployeeReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'EDIT_EMPS_REQUEST': return{
            editloading :true,
            ...state
        }
        case 'EDIT_EMPS_SUCCESS': return{
            editloading : false,
            editsuccess : true
        }
        case 'EDIT_EMPS_FAILED': return{
            editloading : false, 
            editerror : action.payload
        }
        default : return state
    }
}