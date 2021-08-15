import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Signin() {


  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {email, password}
    console.log(users)

    axios.post("http://localhost:3001/api/users/login", users).then(
      res => {
      localStorage.setItem('token', res.data.user.token

      )
        console.log(res.data.user.token)
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
  
        <label>Email address</label>
        <input 
          type="text"
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <label>New password</label>
        <input 
          type="text"
          required
          placeholder="choose password"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button>Login</button>
      </form>
    </div>
  );
}

