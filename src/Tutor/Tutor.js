import React from 'react'

export default function Tutor(props) {
  return (
    <div className='tutor'>
      <h3>Name: {props.tutor.name}</h3>
      <p>Subject: {props.tutor.subject}</p>
      <a href={`mailto:${props.tutor.email}`}>Email</a>
    </div>
  )
}
