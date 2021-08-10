import React from 'react'

export default function Tutor(props) {
  return (
    <div className='tutor'>
      <h3>Name: {props.name}</h3>
      <p>Subject: {props.subject}</p>
      <a href={`mailto:${props.email}`}>Email</a>
    </div>
  )
}
