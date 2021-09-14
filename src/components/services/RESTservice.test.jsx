import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import RESTservice from './RESTservice';

describe('RESTservice', () => {
  it('uses method request and returns json response', async () => {
    render(<RESTservice />);

    const method = await screen.findByRole();
    expect(method).toMatchSnapshot();
  });
});
