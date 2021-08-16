import React,{ useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import AuthNav from '../Nav/AuthNav'

export default function Signup() {

  const [teacher, setUserType] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmedPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {user:{email, subject, password, password_confirmation, username, teacher,}}
    // console.log(user)

    axios.post("http://localhost:3001/api/users", user).then(response => {
      console.log(response)
      sessionStorage.setItem('token', response.data.user.token)
      history.push('/search')
    }).catch(
      err => {
        console.log(err)
      }
    )
  }

  
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>


        <label>Check box to sign up as a tutor</label>
        <input 
            type="checkbox"
            className="slider"
            value={teacher}
            onChange={(e) => setUserType(e.target.value = true)}
          /><br/>

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
        /><br/>
                <input 
          type="text"
          required
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

