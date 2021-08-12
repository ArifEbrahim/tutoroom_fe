import React, { useState, useEffect } from 'react'
import Tutor from './Tutor'
import SearchBar from './SearchBar'
import { Container } from 'react-bootstrap'
import axios from 'axios'


const api_url = 'https://tutoroom.herokuapp.com/api/users'

export default function TutorList() {
  const [allTutors, setAllTutors] = useState([])
  const [filteredTutors, setFilteredTutors] = useState([])

  useEffect(() => {
    getAllTutors()
  }, [])

  const getAllTutors = () => {
    axios.get(api_url)
    .then(response => {
      setAllTutors(response.data)
      setFilteredTutors(response.data)
    })
  }

  const handleSearch = (e) =>{
    let searchValue = document.getElementById('searchText').value
    let filteredResult;
    filteredResult = allTutors.filter((data) => {
      return data.subject === searchValue;
    });
    setFilteredTutors(filteredResult)
  }

  return (
    <>
      <Container>
        <SearchBar onClick={handleSearch}/>
        <div className='tutor-list'>
        {filteredTutors.map((tutor) => (
          <Tutor key={tutor.id} tutor={tutor}/>
        ))}
        </div>
      </Container>
    </>
  )
}
