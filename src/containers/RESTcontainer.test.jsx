import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import RESTcontainer from './RESTcontainer';
import userEvent from '@testing-library/user-event';

describe('RESTcontainer', () => {
  it('uses method request and returns json response', async () => {
    render(<RESTcontainer />);

    const method = await screen.findByText('GET');
    userEvent.click(method);

    const submit = await screen.findByRole('button', { name: 'submit-request' });
    userEvent.click(submit);

    const form = screen.getByTestId('controls-form');
    expect(form).not.toBeEmptyDOMElementt();
  });
});
