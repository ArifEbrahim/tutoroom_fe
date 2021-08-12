import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutor from '../Tutor'

const mockTutor = {
  name: 'Bob',
  subject: 'Boring',
  email: 'test@example.com'
}

describe('Tutor', () => {
  beforeEach(()=>{
    render(<Tutor tutor={mockTutor}/>)
  })

  it('displays the name of a tutor', () => {
    const nameEl = screen.getByText('Bob')
    expect(nameEl).toBeInTheDocument()
  })

  it('displays the subject of a tutor', () => {
    const subjectEl = screen.getByText('Boring')
    expect(subjectEl).toBeInTheDocument()
  })

  it('displays a link to email a tutor', () => {
    const emailEl = screen.getByText('Send Email')
    expect(emailEl.closest('a')).toHaveAttribute('href', 'mailto:test@example.com')
  })
})


