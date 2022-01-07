import React from 'react'
import{ Modal }from 'react-bootstrap'
import EditProfile from './EditProfileForm'


const EditProfileModal = (props) => {
    return (
    
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Personal Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <EditProfile/>
        </Modal.Body>
     
      </Modal>
    )
}

export default EditProfileModal
