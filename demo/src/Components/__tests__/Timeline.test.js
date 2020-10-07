import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Timeline from 'react-customizable-timeline';
import './__mocks__/intersectionObserverMock';

import data from '../../data';

const primaryColor = '#625261';
const secondaryColor = '#F5F5DC';
const titleShape = 'diamond';
const dotShape = 'circle';
const lineShape = 'dotted';
const font = 'Chivo';
const animation = true;

describe('Timeline', () => {
  it('renders correctly', () => {
    const timeline = render(
      <Timeline
        data={data}
        primaryDarkColor={primaryColor}
        primaryLightColor={secondaryColor}
        titleShape={titleShape}
        dotShape={dotShape}
        lineStyle={lineShape}
        primaryFont={font}
        animation={animation}
      />,
    );

    expect(timeline).toMatchSnapshot();
  });

  it('has correct text in tiles', () => {
    render(
      <Timeline
        data={data}
        primaryDarkColor={primaryColor}
        primaryLightColor={secondaryColor}
        titleShape={titleShape}
        dotShape={dotShape}
        lineStyle={lineShape}
        primaryFont={font}
        animation={animation}
      />,
    );

    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.queryByText('2017')).not.toBeInTheDocument();
  });

  it('renders and derenders content on click', () => {
    render(
      <Timeline
        data={data}
        primaryDarkColor={primaryColor}
        primaryLightColor={secondaryColor}
        titleShape={titleShape}
        dotShape={dotShape}
        lineStyle={lineShape}
        primaryFont={font}
        animation={animation}
      />,
    );

    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text

    userEvent.click(screen.getByText('九月十六日，星期三')); //Simulate a click on the component (targeted using the event subtitle text)
    expect(screen.getByText('匆匆 朱自清 散文')).toBeInTheDocument(); //Check that following the click the rendered component contains this text

    userEvent.click(screen.getByText('九月十六日，星期三')); //Simulate another click on the component to derender the content
    expect(screen.queryByText('匆匆 朱自清 散文')).not.toBeInTheDocument(); //Check that the rendered component does not cotain this text
  });

  it('renders the correct amount of sections', () => {
    render(
      <Timeline
        data={data}
        primaryDarkColor={primaryColor}
        primaryLightColor={secondaryColor}
        titleShape={titleShape}
        dotShape={dotShape}
        lineStyle={lineShape}
        primaryFont={font}
        animation={animation}
      />,
    );

    const timelineItems = screen.getAllByTestId('timelineSection');
    expect(timelineItems.length).toEqual(data.length);
  });

  it('renders the correct amount of items per section', () => {
    render(
      <Timeline
        data={data}
        primaryDarkColor={primaryColor}
        primaryLightColor={secondaryColor}
        titleShape={titleShape}
        dotShape={dotShape}
        lineStyle={lineShape}
        primaryFont={font}
        animation={animation}
      />,
    );

    const timelineItems = screen.getAllByTestId('timelineItem');
    let eventsCount = 0;

    for (let i = 0; i < data.length; i++) {
      eventsCount = eventsCount + data[i].events.length;
    }
    expect(timelineItems.length).toEqual(eventsCount);
  });
});
