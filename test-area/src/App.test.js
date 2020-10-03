import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock';

describe('App', () => {
  it('has correct text in tiles', () => {
    render(<App />); //render the App component in test-area/src/App.js

    expect(screen.getByText('2020')).toBeInTheDocument(); //Check that the rendered component contains this text somewhere
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.queryByText('2017')).not.toBeInTheDocument();
  });

  it('renders and derenders content on click', () => {
    render(<App />); //render the App component in test-area/src/App.js

    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text
    expect(
      screen.queryByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢 了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人 偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text

    fireEvent.click(screen.getByText('九月十六日，星期三')); //Simulate a click on the component (targeted using the event subtitle text)
    expect(screen.getByText('匆匆 朱自清 散文')).toBeInTheDocument();
    expect(
      screen.getByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).toBeInTheDocument(); //Check that following the click the rendered component contains this text

    fireEvent.click(screen.getByText('九月十六日，星期三')); //Simulate another click on the component to derender the content
    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text
  });
});

describe('ColorMatch', () => {
  it('should render the color in the color picker ', () => {});
});
