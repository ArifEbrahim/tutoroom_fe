import React, { useState, useEffect } from 'react'
import Tutor from './Tutor'
import SearchBar from './SearchBar'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import './TutorList.css'
import { Redirect } from 'react-router-dom'

export default function TutorList() {
  // if (!sessionStorage.token){
  //   console.log('pre-redirect')
  //   <Redirect to="/" />
  //   console.log('post-redirect')
  // }
  const [allTutors, setAllTutors] = useState([])
  const [filteredTutors, setFilteredTutors] = useState([])
  // const api_url = 'https://tutoroom.herokuapp.com/api/users'
  const api_url='http://localhost:3001/api/v1/tutors'

  useEffect(() => {
    getAllTutors()
  }, [])

  const getAllTutors = async () => {
    await axios.get(api_url)
    .then(response => {
      setAllTutors(response.data.data)
      setFilteredTutors(response.data.data)
    })
  }

  const handleSearch = (e) =>{
    let searchValue = document.getElementById('searchText').value.toLowerCase()
    let filteredResult;
    filteredResult = allTutors.filter((tutor) => {
      return tutor.attributes.subject.toLowerCase() === searchValue;
    });
    setFilteredTutors(filteredResult)
  }

  return (
    <>
      <Container>
        <SearchBar onClick={handleSearch}/>
        <div className='wrapper'>
          <div className='tutor-list'>
          {filteredTutors.map((tutor) => (
            <Tutor key={tutor.id} tutor={tutor}/>
          ))}
          </div>
        </div>
      </Container>
    </>
  )
}
