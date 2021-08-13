import React from 'react';
import { render, waitFor } from '@testing-library/react'
import TutorList from '../TutorList'
import axios from 'axios'

jest.mock('axios')
test('it makes a call to the heroku api',  async () => {
  axios.get.mockResolvedValueOnce({ data: []})
  render(<TutorList />)
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled()
  })
})
