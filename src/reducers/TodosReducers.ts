import { TodosSuccess, TODOS_SUCCESS } from "../actions/todosActions/TodosActionsType"

const todosReducer = ( state = [], action:TodosSuccess ):any =>{
    switch ( action.type ) {
        case TODOS_SUCCESS:
            return{
                loading: false,
                todos: action.payload
            }
        default:
            return state
    }
}

export default todosReducer