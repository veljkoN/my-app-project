import React from 'react'
import { postObject } from '../page/Posts'
import PostItem from '../components/PostItem'
import './PostsList.css'

interface postProps {
    posts:postObject[]
    handleShow:() => void
    setEditData:React.Dispatch<React.SetStateAction<postObject>>
}

const PostsList:React.FC<postProps> = ({ posts, handleShow, setEditData }) => {
    return (
        <div className='post-list'>
        { posts.length>0 && posts.map(( post: postObject ) =>
            <PostItem 
                key = { post.id } 
                post = { post }  
                handleShow = { handleShow } 
                setEditData = { setEditData }
            />)
            }
        </div>
    )
}

export default PostsList
