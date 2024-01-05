import React from 'react';
import { render } from '@testing-library/react-native';
import Movie from '../components/Movie';  // Assuming your component is in a file named 'Movie.js'

const mockRoute = {
  params: {
    original_title: 'Mock Movie',
    poster_path: '/mockPoster.jpg',
    backdrop_path: '/mockBackdrop.jpg',
    release_date: '2022-01-01',
    vote_average: 7.5,
    vote_count: 100,
    overview: 'This is a mock movie.',
  },
};

describe('Movie component', () => {
  it('renders movie details correctly', () => {
    const { getByText, getByTestId } = render(<Movie route={mockRoute} />);

    // Check if the movie title is rendered
    expect(getByText('Mock Movie')).toBeTruthy();

    // Check if release date is rendered
    expect(getByText('Release Date: 2022-01-01')).toBeTruthy();

    // Check if average rating is rendered
    expect(getByText('Average Rating: 7.5')).toBeTruthy();

    // Check if vote count is rendered
    expect(getByText('Vote Count: 100')).toBeTruthy();

    // Check if overview is rendered
    expect(getByText('Overview : This is a mock movie.')).toBeTruthy();

    // Check if the poster and backdrop images are rendered
    expect(getByTestId('poster-image')).toBeTruthy();
    expect(getByTestId('backdrop-image')).toBeTruthy();
  });
});
