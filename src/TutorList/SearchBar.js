import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default function SearchBar(props) {
  return (
    <div>
      <InputGroup className="m-3 p-3" size='lg'>
        <FormControl
        placeholder='What do you want to learn about?' id='searchText'
        />
        <Button variant='outline-success' onClick={props.onClick}>
          Search
        </Button>
      </InputGroup>
    </div>
  )
}
