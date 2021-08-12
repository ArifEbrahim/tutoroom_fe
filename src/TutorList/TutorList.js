import React, { useState, useEffect } from 'react'
import Tutor from './Tutor'

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
      <div>
        <h1>Tutors</h1>
      </div>
      <div className='tutor-list'>
      {tutors.map((tutor) => (
        <Tutor key={tutor.id} tutor={tutor}/>
      ))}
      </div>
    </>
  )
}
