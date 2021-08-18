import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons'
import './TutorProfile.css';

export default function TutorProfile() {
  const [profileData, setProfileData] = useState({})
  const { id } = useParams()
  const api_url=`http://localhost:3001/api/v1/tutors/${id}`

  useEffect(() => {
    getProfileData()
    // eslint-disable-next-line
  }, [])

  const getProfileData = async () => {
    await axios.get(api_url)
    .then(response => {
      console.log(response.data.data.attributes)
      setProfileData(response.data.data.attributes)
    })
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col xs={3} className='text-center'>
          <Image className='img-thumbnail' src={profileData.image_url}/>
          <h2>{profileData.name}</h2>
          <p>Subject: {profileData.subject}</p>
          <Twitter className='mx-2'/><Facebook className='mx-2'/><Linkedin className='mx-2'/><Instagram className='mx-2'/>
          <div className='mt-3'></div>
          <Button href={`mailto:${profileData.email}`} size='lg'>Email Me</Button> 
        </Col>
        <Col>
        <h4>Bio</h4>
          <p className='lead'>{profileData.bio}</p>
        <hr/>
        </Col>
      </Row>
    </Container>
  )
}
