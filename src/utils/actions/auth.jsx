import Store from "../../store";
import { useDispatch } from "react-redux";
//const dispatch = useDispatch()
import { INCREMENT, DECREMENT, SUBMIT_PROFILE } from "./type";
export const IncrementFunc = () => async dispatch => {
    

    console.log('called')
    console.log('reached +', Store.getState().count)

    Store.dispatch({
        type: INCREMENT,

    })
}

export const DecrementFunc = () => async dispatch =>  {
   

    console.log('reached +', Store.getState().count)
    Store.dispatch({
        type : DECREMENT
    })
}