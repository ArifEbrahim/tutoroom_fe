import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutor from '../Tutor'

const mockTutor = {
  name: 'Bob',
  subject: 'Boring',
  email: 'test@example.com'
}

beforeEach(()=>{
  render(<Tutor tutor={mockTutor}/>)
})

test('displays the name of a tutor', () => {
  const nameEl = screen.getByText('Name: Bob')
  expect(nameEl).toBeInTheDocument()
})

test('displays the subject of a tutor', () => {
  const subjectEl = screen.getByText('Subject: Boring')
  expect(subjectEl).toBeInTheDocument()
})

test('displays a link to email a tutor', () => {
  const emailEl = screen.getByText('Email')
  expect(emailEl.closest('a')).toHaveAttribute('href', 'mailto:test@example.com')
})

