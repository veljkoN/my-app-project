import { UserSuccess, USERS_SUCCESS } from "../actions/userActions/UsersActionsTypes"

const usersReducer = ( state = [], action:UserSuccess ):any =>{
    switch ( action.type ) {
        case USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload
            }
        default:
            return state
    }
}

export default usersReducer