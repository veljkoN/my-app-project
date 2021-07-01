import axios from 'axios'
import { Dispatch } from 'redux'
import { PostsDispatchTypes } from './postsActions/PostsActionsType'

const API_FETCH = 'https://jsonplaceholder.typicode.com'

export const getAllData = ( typeAction:any, method:string ) => async ( dispatch:Dispatch<PostsDispatchTypes> ) => {
    try {
        const { data } = await axios.get(`${API_FETCH}/${method}`)
        dispatch({ type:typeAction,payload:data })
    } catch (error) {
        console.log(error.message)
    }
}
