import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  it('displays controls that include radio buttons for each route, submit button and text box', () => {
    render(<Controls 
      url="" 
      body="" 
      onChange={() => {}} 
      onSubmit={() => {}} 
    />);
    const controls = screen.getByTestId('controls-form');
    expect(controls).toMatchSnapshot();
  });
});
