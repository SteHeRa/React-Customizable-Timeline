import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock';

describe('App', () => {
  it('has 2020 tile', () => {
    render(<App />);

    expect(screen.queryByText('2020')).toBeInTheDocument();
  });
  it('has 2019 tile', async () => {
    render(<App />);

    expect(screen.queryByText('2019')).toBeInTheDocument();
  });
  it('has 2018 tile', async () => {
    render(<App />);

    expect(screen.queryByText('2018')).toBeInTheDocument();
  });
  it('does not have a 2017 tile', async () => {
    render(<App />);

    expect(screen.queryByText('2017')).not.toBeInTheDocument();
  });
});

describe('ColorMatch', () => {
  it('should render the color in the color picker ', () => {

  });
}
 
)