import React, { Component } from 'react'
import Tutor from '../Tutor/Tutor'

const api_url = 'https://tutoroom.herokuapp.com/api/users'

class TutorList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutors: [],
    }
  }

  componentDidMount() {
    this.getTutors();
  }

  getTutors() {
    fetch(api_url)
    .then(response => response.json())
    .then(tutors => {
      this.setState({
        tutors: tutors,
      })
    })
  }

  render() {
    return (
      <div className='tutor-list'>
        {this.state.tutors.map((tutor) => (
          <Tutor key={tutor.id} tutor={tutor}/>
        ))}
      </div>
    )
  }
}

export default TutorList
