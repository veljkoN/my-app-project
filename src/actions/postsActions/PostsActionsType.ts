export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const CREATE_POST = "CREATE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"

interface Postsuccess {
    type: typeof POSTS_SUCCESS
    payload:any
}
interface CreatePost {
    type:typeof CREATE_POST
    payload:any
}
interface UpdatePost {
    type:typeof UPDATE_POST
    payload:any
}
interface DeletePost {
    type:typeof DELETE_POST
    payload:any
}

export type PostsDispatchTypes = Postsuccess | CreatePost | UpdatePost | DeletePost