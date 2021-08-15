import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email address: </label>
        <input 
          type='email'
          placeholder={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input 
          type='password'
          placeholder={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}