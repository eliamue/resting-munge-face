import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('displays stuff', () => {
    render(<Display />);
  });

  const display = screen.getByTestId('display-test');
  expect(display).toMatchSnapshot();
});
