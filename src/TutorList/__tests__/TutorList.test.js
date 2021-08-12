import React from 'react';
import { render, screen } from '@testing-library/react';
import TutorList from '../TutorList'

describe('TutorList', () => {
  beforeEach(()=>{
    render(<TutorList />)
  })

  test('the header is rendered correctly', () => {
    const headerElement = screen.getByText('Tutors');
    expect(headerElement).toBeInTheDocument();
  })

  test('it makes a call to the heroku api', () => {
    const fetchMock = jest.spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    )
    expect(fetchMock).toHaveBeenCalledWith('https://tutoroom.herokuapp.com/api/users')
  })
})