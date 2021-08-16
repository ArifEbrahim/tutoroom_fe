import React from 'react'
import './Home.css'
import Study from './study.mp4'
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <section className="showcase">
      <header>
        <h2 className="logo">Tutoroom</h2>
        <div className='menu'>
          <Link to='/login'>Login</Link> 
          <span> or </span> 
          <Link to='/signup'>Signup</Link> 
        </div>
      </header>
      <video className='videoTag' autoPlay loop muted>
        <source src={Study} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="text">
        <h3>Learn from the best tutors in the world</h3>
        <p>Tutoroom helps students connect with the best tutors around the world. Regardless of your learning objective, we have a tutor that can
          help take you to the next level.
        </p>
      </div>
  </section>
    )
}
