import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

export default function Login() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const api_url='http://localhost:3001/api/users/login'
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(api_url, {
      "email": email,
      "password": password
    })
    .then(response => {
      console.log(response)
      history.push('/search')
    })
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder={email} onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' required placeholder={password} onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form>
        </Card.Body>
      </Card>
    </div>
  )
}