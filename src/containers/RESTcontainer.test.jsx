import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RESTcontainer from './RESTcontainer';
import userEvent from '@testing-library/user-event';

describe('RESTcontainer', () => {
  it('uses method request and returns json response', async () => {
    render(<RESTcontainer />);

    // const text = screen.getByRole('textbox', { name: 'url' });
    // // expect(text).toMatchSnapshot();
    // userEvent.type(text, '');

    const urlInput = await screen.findByPlaceholderText('https://');
    userEvent.type(
      urlInput,
      'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
    );

    const radio = await screen.findByLabelText('GET');
    userEvent.click(radio);

    const submit = await screen.findByRole('button');
    userEvent.click(submit);
    screen.debug();
    
    return waitFor(() => {
      const rock = screen.getByText('"rock octorok"');
      expect(rock).toBeTruthy();
    });

  });
});
