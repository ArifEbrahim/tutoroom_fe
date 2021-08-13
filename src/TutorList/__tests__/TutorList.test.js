import React from 'react';
import { render, waitFor } from '@testing-library/react'
import TutorList from '../TutorList'
import axios from '../__mocks__/axios'

// jest.mock('axios')
// global.axios = axios
test('it makes a call to the heroku api',  async () => {
  // let container = document.createElement('div');
  // jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });
  axios.get.mockResolvedValueOnce({ data: []})
  // return act(() => {
  //   return Promise.resolve({ data: []})
  // })
  // act(() => {
    render(<TutorList />)
  // })
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled()
  });
  
})
