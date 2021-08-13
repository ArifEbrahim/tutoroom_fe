import React from 'react'
import { useParams } from 'react-router-dom'

export default function TutorProfile() {
  const { id } = useParams();  
  
  return (
    <div>
      <h1>Tutor profile</h1>
    </div>
  )
}
