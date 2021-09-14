import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import RESTcontainer from './RESTcontainer';

describe('RESTcontainer', () => {
  it('uses method request and returns json response', async () => {
    render(<RESTcontainer />);

    const method = await screen.findByRole();
    expect(method).toMatchSnapshot();
  });
});
