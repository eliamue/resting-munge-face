import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RESTcontainer from './RESTcontainer';
import userEvent from '@testing-library/user-event';

describe('RESTcontainer', () => {
  it('uses method request and returns json response', () => {
    render(<RESTcontainer />);

    const text = screen.getByRole('textbox', { name: 'url-input' });
    expect(text).toMatchSnapshot();

    const urlInput = screen.findByPlaceholderText('https://');
    userEvent.type(
      urlInput,
      'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
    );

    const submit = screen.findByRole('button');
    userEvent.click(submit);
  });
});
