export const getAllProjectReducers=(state={},action)=>{

    switch(action.type)
    {
        case 'GET_PROJECT_REQUEST':return{
            ...state
        }
        case 'GET_PROJECT_SUCCESS':return{
            projects: action.payload
        }
        case 'GET_PROJECT_FAILED':return{
            error:action.payload
        }
        default : return state
    }
}
export const addProjectReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'ADD_PROJECT_REQUEST': return{
            loading :true,
            ...state
        }
        case 'ADD_PROJECT_SUCCESS': return{
            loading : false,
            success : true
        }
        case 'ADD_PROJECT_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}

export const getProjectByIdReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'GET_PROBYID_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_PROBYID_SUCCESS': return{
            loading : false,
            project : action.payload
        }
        case 'GET_PROBYID_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}


export const editProjectReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'EDIT_PROJECT_REQUEST': return{
            editloading :true,
            ...state
        }
        case 'EDIT_PROJECT_SUCCESS': return{
            editloading : false,
            editsuccess : true
        }
        case 'EDIT_PROJECT_FAILED': return{
            editloading : false, 
            editerror : action.payload
        }
        default : return state
    }
}