import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock';

import data from './data';

describe('App', () => {
  it('renders correctly', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });

  it('has correct text in tiles', () => {
    render(<App />); //render the App component in test-area/src/App.js

    expect(screen.getByText('2020')).toBeInTheDocument(); //Check that the rendered component contains this text somewhere
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.queryByText('2017')).not.toBeInTheDocument();
  });

  it('renders and derenders content on click', () => {
    render(<App />); //render the App component in test-area/src/App.js

    expect(screen.queryByText('16/09/2020 Label')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text
    expect(screen.queryByText('16/09/2020 Content')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text

    fireEvent.click(screen.getByText('16/09/2020 Subtitle')); //Simulate a click on the component (targeted using the event subtitle text)
    expect(screen.getByText('16/09/2020 Label')).toBeInTheDocument();
    expect(screen.getByText('16/09/2020 Content')).toBeInTheDocument(); //Check that following the click the rendered component contains this text

    fireEvent.click(screen.getByText('16/09/2020 Subtitle')); //Simulate another click on the component to derender the content
    expect(screen.queryByText('16/09/2020 Label')).not.toBeInTheDocument();
    expect(screen.queryByText('16/09/2020 Content')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text
  });

  it('renders the correct amount of items', () => {
    render(<App />);

    const timelineItems = screen.getAllByTestId('timelineItem');
    expect(timelineItems.length).toEqual(data.length);
  });
});

describe('ColorMatch', () => {
  it('should render the color in the color picker ', () => {});
});
