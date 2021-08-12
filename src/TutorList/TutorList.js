import React, { useState, useEffect } from 'react'
import Tutor from './Tutor'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';

const api_url = 'https://tutoroom.herokuapp.com/api/users'

export default function TutorList() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    getTutors();
  })

  const getTutors = () => {
    fetch(api_url)
    .then(response => response.json())
    .then(tutors => setTutors(tutors))
  }

  return (
    <>
      <Container>
        <div>
          <InputGroup className="m-3 p-3" size='lg'>
            <FormControl
            placeholder='What do you want to learn about?'
            />
          <Button variant='outline-secondary'>
            Search
          </Button>
          </InputGroup>
        </div>
        <div className='tutor-list'>
        {tutors.map((tutor) => (
          <Tutor key={tutor.id} tutor={tutor}/>
        ))}
        </div>
      </Container>
    </>
  )
}
