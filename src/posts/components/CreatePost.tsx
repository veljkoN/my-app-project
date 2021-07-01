import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postObject } from '../page/Posts'
import { AddPost, UpdatePost } from '../../actions/postsActions/PostsActions'

interface editProps {
    editData:postObject
    setEditData:React.Dispatch<React.SetStateAction<postObject>>
}
const postIntit = {userId:NaN,id:NaN,title:'',body:''}

const CreatePost:React.FC<editProps> = ({ editData, setEditData }) => {
    const [ message, setMessage ] = useState ('')
    const [ post, setPost ] = useState<postObject>(postIntit)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(editData.title && editData.body){
            setPost(editData)
        }
    },[editData])
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(AddPost(post))
        setEditData({userId:NaN,id:NaN,title:'',body:''})
        setMessage( 'Post is successfully created' )
    }
    const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(UpdatePost(post))
        setEditData({userId:NaN,id:NaN,title:'',body:''})
        setMessage( 'Post is successfully changed' )
    }
    if (message) return <h3 className={`msg-create-post text-${ message === "Post is successfully created" ? "danger":"warning" }`}>{ message }</h3>
    return (
        <Form onSubmit={ editData.title && editData.body ? handleChange : handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter title" defaultValue={post.title} onChange={(e)=>setPost({...post, title:e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Text <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter text" defaultValue={post.body} onChange={(e)=>setPost({...post, body:e.currentTarget.value})} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={post.title.trim() === '' || post.body.trim() === '' ? true:false }>
                {
                    editData.title && editData.body ? 'Save changes':'Save'
                }
            </Button>
        </Form>
    )
}

export default CreatePost
