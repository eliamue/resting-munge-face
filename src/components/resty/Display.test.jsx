import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('displays test body', () => {
    render(<Display res={{ Henlo: 'Go fetch!' }} />);
  });

  const display = screen.getByText('Go');
  expect(display).toMatchSnapshot();
});
