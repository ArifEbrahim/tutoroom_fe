import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import TutorList from '../TutorList'


describe('TutorList', () => {
  // beforeEach(()=>{
  //   render(<TutorList />)
  // })

  test('the search bar is rendered correctly', () => {
    render(<TutorList />)
    const inputEl = screen.getByPlaceholderText('What do you want to learn about?');
    const searchBtn = screen.getByText('Search')
    expect(inputEl).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })

  // test('clicking the search button generates results', ()=> {
  //   const inputEl = screen.getByPlaceholderText('What do you want to learn about?');
  //   const searchBtn = screen.getByText('Search')
  //   fireEvent.change(inputEl, {
  //     target: {
  //       value: 'cooking'
  //     }})
  //   fireEvent.click(searchBtn)
  // })


  // test('it makes a call to the heroku api', () => {
  //   const fetchMock = jest.spyOn(global, 'fetch')
  //   .mockImplementation(() =>
  //     Promise.resolve({ json: () => Promise.resolve([]) })
  //   )
  //   expect(fetchMock).toHaveBeenCalledWith('https://tutoroom.herokuapp.com/api/users')
  // })


})