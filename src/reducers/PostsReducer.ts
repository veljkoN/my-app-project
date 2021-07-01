import { CREATE_POST, PostsDispatchTypes, POSTS_SUCCESS, UPDATE_POST, DELETE_POST } from "../actions/postsActions/PostsActionsType"
import { postObject } from "../posts/page/Posts"

const postsReducer = ( state:any=[], action:PostsDispatchTypes ):any =>{
    switch ( action.type ) {
        case POSTS_SUCCESS:
            return{
                posts: action.payload
            }
        case CREATE_POST:
            return {
                posts:[action.payload,...state.posts]
            }
        case UPDATE_POST:
            return {
                posts:state.posts.map((item:postObject)=> item.id===action.payload.id? action.payload:item)
            }
        case DELETE_POST:
            return {
                posts:state.posts.filter((item:postObject)=> item.id!==action.payload)
            }
        default:
            return state
    }
}

export default postsReducer