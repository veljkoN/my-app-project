import React from 'react'
import { postObject } from '../page/Posts'
import { Card } from 'react-bootstrap'
import { DeletePost } from '../../actions/postsActions/PostsActions'
import { useDispatch } from 'react-redux'
import './PostItem.css'
import { upperCase } from '../../shared/utils/upperCase'

interface postItemProps {
    post:postObject
    handleShow:any
    setEditData:any
}

const PostItem:React.FC<postItemProps> = ({ post, handleShow, setEditData }) => {
    const dispatch = useDispatch()
    const handleDelete = (id:number | null) => {
        dispatch(DeletePost(id))
    }
    
    return (
        <Card className='card mb-2'>
            <Card.Body>
                <Card.Title id='card-title'>
                    { upperCase(post.title) }
                </Card.Title>
                <Card.Text>
                    { upperCase(post.body) }
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link className="text-danger btn"
                    onClick = {() => handleDelete (post.id)}
                >
                    Delete
                </Card.Link>
                <Card.Link 
                    className='text-info btn'
                    onClick = {() => {
                        handleShow()
                        setEditData({
                            userId:post.userId, 
                            id:post.id,title:post.title, 
                            body:post.body})  
                        }}
                >
                    Edit
                </Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default PostItem
