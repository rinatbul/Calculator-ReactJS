import {ACTIONS} from "./App.jsx";

export const OperationButton=({dispatch, operation})=>{
    return <button onClick={()=>dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}>{operation}</button>
}