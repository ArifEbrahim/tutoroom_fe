import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons'

export default function Profile() {

  const api_url='http://localhost:3001/api/user'
  const[userData, setUserData] = useState({})

  const config = {
    headers: {
      Authorization: 'Token ' + sessionStorage.getItem('token')
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios.get(api_url, config)
    .then(response => {
      setUserData(response.data.user)
    })
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col xs={3} className='text-center'>
          <Image className='img-thumbnail' src={userData.image_url}/>
          <h2>{userData.username}</h2>
          <p>Subject: {userData.subject}</p>
          <Twitter className='mx-2'/><Facebook className='mx-2'/><Linkedin className='mx-2'/><Instagram className='mx-2'/>
          <div className='mt-3'></div>
          <Button href={`mailto:${userData.email}`} size='lg'>Email Me</Button> 
        </Col>
        <Col>
        <h4>Bio</h4>
          <p className='lead'>{userData.bio}</p>
        <hr/>
        </Col>
      </Row>
      <Upload />
    </Container>
  )
}
