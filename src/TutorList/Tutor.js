import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function Tutor(props) {
  return (
    <div className='tutor'>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src='https://randomuser.me/api/portraits/men/75.jpg'/>
        <Card.Body>
          <Card.Title>{props.tutor.name}</Card.Title>
          <Card.Text>{props.tutor.bio}</Card.Text>
          <Button href="/">View Profile</Button>
        </Card.Body>
      </Card>
    </div>
  )
}



