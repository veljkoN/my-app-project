import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CreatePost from '../../posts/components/CreatePost'
import { postObject } from '../../posts/page/Posts'

interface modalProps {
    show:boolean
    setShow:React.Dispatch<React.SetStateAction<boolean>>
    editData:postObject
    setEditData:React.Dispatch<React.SetStateAction<postObject>>
}
const UniModal:React.FC <modalProps> = ({ show, setShow, editData, setEditData }) => {
    const handleClose = () => setShow(false)
    return  (
      <Modal 
        show={show} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <CreatePost 
              editData = { editData } 
              setEditData = { setEditData } 
            />
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

export default UniModal