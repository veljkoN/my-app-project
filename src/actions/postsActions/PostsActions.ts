import axios from 'axios'
import { Dispatch } from 'redux'
import { postObject } from '../../posts/page/Posts'
import { PostsDispatchTypes, CREATE_POST, UPDATE_POST, DELETE_POST } from './PostsActionsType'

const API_FETCH = 'https://jsonplaceholder.typicode.com'

export const AddPost = ( post:postObject ) => async ( dispatch:Dispatch<PostsDispatchTypes> ) => {
    try {
        const { data } = await axios.post(`${API_FETCH}/posts`, {
            title: post.title,
            body: post.body,
            userId: 101
          }
        ) 
        
        dispatch({ type:CREATE_POST,payload:data })
    } catch (error) {
        console.log(error.message)
    }
}

export const UpdatePost = ( post:postObject ) => async ( dispatch:Dispatch<PostsDispatchTypes> ) => {
    try {
        const { data } = await axios.put(`${API_FETCH}/posts/${post.id}`, {
            id:post.id,
            title: post.title,
            body: post.body,
            userId: 1,
          }
        )
        dispatch({type:UPDATE_POST,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const DeletePost = ( id:number | null ) => async ( dispatch:Dispatch<PostsDispatchTypes> ) => {
    try {
        await axios.delete(`${API_FETCH}/posts/${id}`)
        dispatch({ type:DELETE_POST,payload:id })
    } catch (error) {
        console.log(error.message)
    }
}