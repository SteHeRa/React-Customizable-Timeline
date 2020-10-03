import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock';

describe('App', () => {
  it('has correct text in tiles', () => {
    render(<App />);

    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.queryByText('2017')).not.toBeInTheDocument();
  });
});

describe('ColorMatch', () => {
  it('should render the color in the color picker ', () => {});
});
