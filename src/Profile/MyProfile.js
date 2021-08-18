import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col, Image, Button, Modal, Form } from 'react-bootstrap'
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons'
import { Redirect, useHistory } from 'react-router-dom'

export default function Profile() {

  const history = useHistory()
  const userId = sessionStorage.getItem('id')
  const api_url=`http://localhost:3001/api/v1/tutors/${userId}`
  const [profileData, setProfileData] = useState({})
  const getProfile = () => {
    axios.get(api_url)
    .then(response => {
      console.log(response)
      setProfileData(response.data.data.attributes)
      setFullname(response.data.data.attributes.fullname)
      setSubject(response.data.data.attributes.subject)
      setBio(response.data.data.attributes.bio)
    })
  }

  useEffect(() => {
    if (!sessionStorage.token) {
      alert('Please login or signup to access the website')
      history.push('/')
    } else {
    getProfile()
    }
  }, [])

  //then be able to edit profile data
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [fullname, setFullname] = useState('')
  const [subject, setSubject] = useState('')
  const [bio, setBio] = useState('')

  const updateProfile = () => {
    handleClose()
    const newData = { 
      bio: bio,
      subject: subject,
      fullname: fullname
    }

    axios.patch(api_url, newData)
    .then(response => {
      console.log(response)
      getProfile()
    })
  }

  return (
    <>
    <Container>
      <Row className='mt-3'>
        <Col xs={3} className='text-center'>
          <Image className='img-thumbnail' src={profileData.image_url}/>
          <h2>{profileData.fullname}</h2>
          <p>Subject: {profileData.subject}</p>
          <Twitter className='mx-2'/><Facebook className='mx-2'/><Linkedin className='mx-2'/><Instagram className='mx-2'/>
          <div className='mt-3'></div>
          <Button variant="secondary" onClick={handleShow}>Edit profile</Button>
        </Col>
        <Col>
          <h4>Bio</h4>
          <p className='lead'>{profileData.bio}</p>
        <hr/>
        </Col>
      </Row>
    </Container>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" value={fullname} onChange={(e)=> setFullname(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control as='textarea' rows={3} value={bio} onChange={(e)=> setBio(e.target.value)}/>
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
