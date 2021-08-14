import React from 'react'
import { useState } from 'react'
//  import axios from 'axios'

export default function Signup() {
  // const teacher = false
  const [teacher, setUserType] = useState(false);
  const [subject, setSubject] = useState(" ");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const [password_confirmation, setConfirmedPassword] = useState("confirm password");
  const username = "thisuser"

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {user:{email, subject, password, password_confirmation, username, teacher,}}
    console.log(user)

    fetch('http://localhost:3001/api/users', {
      mode: 'no-cors',
      method: 'POST', 
      headers: { "Content-Type": "json"},
      body: JSON.stringify(user)
    }).then(() => {
      console.log(user)
    })
  }

  
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="radio"
            value={teacher}
            onChange={(e) => setUserType(e.target.value)}
            />
            Student
        </label>
        
        <label>
          <input 
            type="radio"
            value={teacher}
            onChange={(e) => setUserType(e.target.value)}
            />
            Tutor
        </label>

        <label>Subject</label>
          <input 
            type="text"
            required
            placeholder=" "
            onChange={(e) => setSubject(e.target.value)}
          /><br/>
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
        <label>Confirm password</label>
        <input 
          type="text"
          required
          placeholder="confirm password"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
