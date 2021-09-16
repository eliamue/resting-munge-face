import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('displays test body', () => {
    const fetch = { Henlo: 'Go fetch!' };
    render(<Display display={fetch} />);

    const display = screen.getByText('"Go fetch!"');
    expect(display).toMatchSnapshot();
  });

});
