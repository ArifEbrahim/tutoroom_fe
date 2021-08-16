import React,{ useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import AuthNav from '../Nav/AuthNav'

export default function Signup() {

  const [teacher, setUserType] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setConfirmedPassword] = useState("")
  const [username, setUsername] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { user:{ email, subject, password, password_confirmation, username, teacher } }

    axios.post("http://localhost:3001/api/users", user)
    .then(response => {
      console.log(response)
      sessionStorage.setItem('token', response.data.user.token)
      history.push('/search')
    }).catch(err => {
        console.log(err)
      }
    )
  }

  return (
    <>
    <AuthNav />
    <div className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '35rem' }} className='shadow p-3 mb-5 bg-body rounded'>
        <Card.Body>
          <Card.Title>Sign up</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" required placeholder={username} onChange={(e)=> setUsername(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row>
                  <Form.Label>Subject</Form.Label>
                  <Col xs={8}>
                    <Form.Control type="text" required placeholder={subject} onChange={(e)=> setSubject(e.target.value)}/>
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" value={teacher} onChange={(e) => setUserType(e.target.value = true)} label="I am a teacher" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder={email} onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' required placeholder={password} onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type='password' required placeholder={password_confirmation} onChange={(e)=> setConfirmedPassword(e.target.value)}/>
              </Form.Group>
              <div className='d-flex justify-content-around'>
                <Button variant="success" type="submit" size='lg'>
                Sign up
                </Button>
              </div>
            </Form>
        </Card.Body>
      </Card>
    </div>
    </> 
  );
}

