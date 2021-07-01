import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { GetPosts } from '../../actions/postsActions/PostsActions'
import UniModal from '../../shared/UIElements/Modal'
import { RootStore } from '../../Store'
import PostsList from '../components/PostsList'
import PaginationUI from '../../shared/UIElements/Pagination'
import { getAllData } from '../../actions/AllDataActions'
import { POSTS_SUCCESS } from '../../actions/postsActions/PostsActionsType'
import './Posts.css'

export type postObject = {
    userId:number 
    id:number
    title:string  
    body:string
}

const Posts:React.FC = () => {
    const [ show, setShow ] = useState(false)
    const [ editData, setEditData ] = useState<postObject>({
        userId:NaN,
        id:NaN,
        title:'',
        body:''
    })
    const postsState = useSelector(( state:RootStore ) => state.posts )
    const dispatch = useDispatch()
    const [ postsPerPage, setPostsPerPage ] = useState <postObject[]> ([])
    const [ paginationNumber, setPaginationNumber ] = useState <number[]> ([])
    const [ numberPage, setNumberPage ] = useState(0)

    useEffect(() => {
        dispatch(getAllData(POSTS_SUCCESS, 'posts'))
    }, [ dispatch ])
    useEffect(()=>{
        if(postsState.posts){
            const numbers:any =  Array.from(Array(5).keys())
            setPaginationNumber(numbers)
            setPostsPerPage( postsState.posts.slice( numberPage * 20,numberPage * 20 + 20) )
        }
    },[ postsState.posts, numberPage ])
    const handleShow = () => setShow (true)
    const openModal = () => {
        handleShow()
        setEditData({
            userId:NaN,
            id:NaN,
            title:'',
            body:''
        })
    }
    if (!postsState.posts) return <h2>Loadnig...</h2>
    return (
        <div className="container-fluid">
            <h2 className = "text-center mt-2 mb-2">
                List of Posts
            </h2>
            <i
                className = "fa fa-plus-circle" 
                id = "add-post"
                onClick = { openModal } 
            >
            </i>
            <UniModal 
                setShow = { setShow } 
                show = { show } 
                editData = { editData } 
                setEditData = { setEditData }
            />
            <PaginationUI 
                paginationNumber = { paginationNumber } 
                numberPage = { numberPage }
                setNumberPage = { setNumberPage } 
            />
            <PostsList 
                posts = { postsPerPage } 
                handleShow = { handleShow }  
                setEditData = { setEditData } 
            />
        </div>
    )
}

export default Posts
