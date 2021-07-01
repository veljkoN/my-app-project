import { combineReducers} from 'redux'
import postsReducer from './PostsReducer'
import todosReducer from './TodosReducers'
import usersReducer from './UsersReducer'

const RootReducer = combineReducers({
    users : usersReducer,
    todos : todosReducer,
    posts : postsReducer
})
export default RootReducer