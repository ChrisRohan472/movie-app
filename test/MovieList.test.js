import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MovieList from '../components/MovieList';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('MovieList component', () => {
  test('renders movie list correctly', () => {
    const { getByTestId } = render(<MovieList type="now" navigation={mockNavigation} />);
    
    // Check if the component renders without crashing
    expect(getByTestId('movie-list')).toBeTruthy();
  });
  test('renders movie list correctly top', () => {
    const { getByTestId } = render(<MovieList type="top" navigation={mockNavigation} />);
    
    // Check if the component renders without crashing
    expect(getByTestId('movie-list')).toBeTruthy();
  });
  test('renders movie list correctly upcoming', () => {
    const { getByTestId } = render(<MovieList type="upcoming" navigation={mockNavigation} />);
    
    // Check if the component renders without crashing
    expect(getByTestId('movie-list')).toBeTruthy();
  });
  test('renders movie list correctly popular', () => {
    const { getByTestId } = render(<MovieList type="popular" navigation={mockNavigation} />);
    
    // Check if the component renders without crashing
    expect(getByTestId('movie-list')).toBeTruthy();
  });

 
});
