import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutor from '../Tutor'

const mockTutor = {
  name: 'Bob',
  subject: 'Boring',
  email: 'test@example.com'
}

test('displays the name of a tutor', () => {
  render(<Tutor tutor={mockTutor}/>)
  const nameEl = screen.getByText('Name: Bob')
  expect(nameEl).toBeInTheDocument()
})

test('displays the subject of a tutor', () => {
  render(<Tutor tutor={mockTutor}/>)
  const subjectEl = screen.getByText('Subject: Boring')
  expect(subjectEl).toBeInTheDocument()
})

test('displays the email of a tutor', () => {
  render(<Tutor tutor={mockTutor}/>)
  const emailEl = screen.getByText('Email')
  expect(emailEl.closest('a')).toHaveAttribute('href', 'mailto:test@example.com')
})

