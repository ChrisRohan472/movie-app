import React from 'react';
import { View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import SwitchComponent from '../components/search';
const MockInput = () => (<View />)
jest.mock('@rneui/themed', () => ({
  AirbnbRating: jest.fn(),
  Input: jest.fn(() => <MockInput />),
  Icon: jest.fn(() => <></>),
  SearchBar:jest.fn(() => <MockInput />)

}))
describe('SwitchComponent', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SwitchComponent />);
    
    // Check if the component renders without crashing
  });

  // Add more test cases as needed
});
