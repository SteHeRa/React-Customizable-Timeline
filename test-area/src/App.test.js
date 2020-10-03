import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
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

  it('renders and derenders content on click', () => {
    render(<App />);

    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢 了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人 偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('九月十六日，星期三'));
    expect(screen.getByText('匆匆 朱自清 散文')).toBeInTheDocument();
    expect(
      screen.getByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText('九月十六日，星期三'));
    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？--是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？',
      ),
    ).not.toBeInTheDocument();
  });
});

describe('ColorMatch', () => {
  it('should render the color in the color picker ', () => {});
});
