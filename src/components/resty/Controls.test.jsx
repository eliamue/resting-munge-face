import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  it('displays controls that include radio buttons, form, and submit button', () => {
    render(
      <Controls 
        onChange={() => {}} 
        onSubmit={() => {}} 
        url=""
        body=""
      />
    );
  });

  const controls = screen.getByTestId('controls-form');
  expect(controls).toMatchSnapshot();
});
