import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col, Image, Button, Modal, Form } from 'react-bootstrap'
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons'

export default function Profile() {

  const get_url='http://localhost:3001/api/v1/tutors/1'
  const[userData, setUserData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("")
  const [subject, setSubject] = useState("")
  const [bio, setBio] = useState("")


// get data initially
  const config = {
    headers: {
      Authorization: 'Token ' + sessionStorage.getItem('token')
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios.get(get_url)
    .then(response => {
      console.log(response)
      setUserData(response.data.data.attributes)
    })
  }

  //when updating data
  const newData = { 
    bio: bio
  }

  const updateProfile = () => {
    handleClose()
    axios.patch(`http://localhost:3001/api/v1/tutors/1`, newData)
    .then(response => console.log(response))
  }


  //render code
  return (
    <>
    <Container>
      <Row className='mt-3'>
        <Col xs={3} className='text-center'>
          <Image className='img-thumbnail' src={userData.image_url}/>
          <h2>{userData.name}</h2>
          <p>Subject: {userData.subject}</p>
          <Twitter className='mx-2'/><Facebook className='mx-2'/><Linkedin className='mx-2'/><Instagram className='mx-2'/>
          <div className='mt-3'></div>

        </Col>
        <Col>
        <div className='d-flex justify-content-between align-items-end'>
        <h4>Bio</h4>
        <p className='lead'>{userData.bio}</p>
          <Button variant="secondary" onClick={handleShow}>
             Edit profile
          </Button>
        </div>
        <hr/>
        </Col>
      </Row>
    </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder={userData.username} onChange={(e)=> setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder={userData.subject} onChange={(e)=> setSubject(e.target.value)}/>
      </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder={userData.bio} onChange={(e)=> setBio(e.target.value)}/>
        </Form.Group> 
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}