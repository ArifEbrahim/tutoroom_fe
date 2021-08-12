import React from 'react';
import { render, screen } from '@testing-library/react';
import TutorList from '../TutorList'


describe('TutorList', () => {
  beforeEach(()=>{
    render(<TutorList />)
  })

  test('the search bar is rendered correctly', () => {
    const searchEl = screen.getByPlaceholderText('What do you want to learn about?');
    const searchBtn = screen.getByText('Search')
    expect(searchEl).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })

  // test('clicking the search button generates results', ()=> {
  //   const tutorName = screen.getByText('Mike')
  //   expect(tutorName).not.toBeInTheDocument;
  // })


  // test('it makes a call to the heroku api', () => {
  //   const fetchMock = jest.spyOn(global, 'fetch')
  //   .mockImplementation(() =>
  //     Promise.resolve({ json: () => Promise.resolve([]) })
  //   )
  //   expect(fetchMock).toHaveBeenCalledWith('https://tutoroom.herokuapp.com/api/users')
  // })


})