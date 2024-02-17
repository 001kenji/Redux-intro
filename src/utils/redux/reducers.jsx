import Store from "../../store"
import {INCREMENT,DECREMENT, SUBMIT_PROFILE} from '../actions/type'

const initialState = {
    count: 0,
    profile : {}
}

function rootReducer (state = initialState, action) {
    // const {type} = action
    console.log('reached', state.count)
    switch(action?.type){
        
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1
            }
        
        case SUBMIT_PROFILE:
            return {
                ...state,
                profile : action.payload
            }
        
        default:
            return{
                ...state
            }
    }
}

export {rootReducer}
