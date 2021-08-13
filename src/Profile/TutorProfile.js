import React from 'react'
import { useParams } from 'react-router-dom'
import './TutorProfile.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons'

export default function TutorProfile() {
  const { id } = useParams()

  const mockData = [{
    "id": "1",
    "type": "tutor",
      "attributes": {
      "name": "Bob Ross",
      "image_url": "https://www.bobross.com/content/bob_ross_img.png",
      "slug": "bob-ross",
      "email": "test@example.com",
      "bio": "let's paint some trees"
      }
    }]
  
  return (
    <Container>
      <Row className='mt-3'>
        <Col xs={4} className='text-center'>
          <Image className='img-thumbnail' src={mockData[0].attributes.image_url} />
          <h2>{mockData[0].attributes.name}</h2>
          <Twitter className='mx-2'/><Facebook className='mx-2'/><Linkedin className='mx-2'/><Instagram className='mx-2'/>
          <div className='mt-3'></div>
          <Button href={`mailto:${mockData[0].attributes.email}`} size='lg'>Email Me</Button> 
        </Col>
        <Col xs={8}>
          <h4>Bio</h4>
          <p className='lead'>{mockData[0].attributes.bio}</p>
        </Col>
      </Row>
    </Container>
  )
}
