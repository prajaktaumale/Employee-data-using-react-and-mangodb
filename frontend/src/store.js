import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllEmpReducers} from './reducers/empReducer'
import { addEmployeeReducer } from './reducers/empReducer'
import { getAllProjectReducers } from './reducers/projectReducer'
import {getEmployeeByIdReducer} from './reducers/empReducer'
import { editEmployeeReducer } from './reducers/empReducer'

const finalReducer = combineReducers({
    getAllEmpReducers : getAllEmpReducers,
    addEmployeeReducer : addEmployeeReducer,
    getEmployeeByIdReduer : getEmployeeByIdReducer,
    editEmployeeReducer : editEmployeeReducer, 
    getAllProjectReducers : getAllProjectReducers
})

const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store