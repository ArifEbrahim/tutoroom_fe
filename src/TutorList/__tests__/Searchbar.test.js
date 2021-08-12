import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from "../SearchBar";

describe('SearchBar', () => {
  test('the search bar is rendered correctly', () => {
    render(<SearchBar />)
    const inputEl = screen.getByPlaceholderText('What do you want to learn about?');
    const searchBtn = screen.getByText('Search')
    expect(inputEl).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })

  test('the handleSearch method is properly called', () => {
    const mockHandleSearch = jest.fn()
    render(<SearchBar onClick={mockHandleSearch}/>)
    const searchBtn = screen.getByText('Search')
    fireEvent.click(searchBtn)
    expect(mockHandleSearch).toHaveBeenCalled()
  })
})