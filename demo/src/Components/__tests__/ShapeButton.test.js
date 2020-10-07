import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShapeButton from '../ShapeButton/ShapeButton';

describe('ShapeButton', () => {
  it('component renders correctly', () => {
    const shapebutton = render(
      <ShapeButton
        shapes={{
          titleShape: 'circle',
          dotShape: 'circle',
          lineShape: 'solid',
        }}
        setShapes={setShapes}
      />,
    );
    expect(shapebutton).toMatchSnapshot();
  });

  it('calls when clicked', () => {});

  const setShapes = jest.fn();

  render(
    <ShapeButton
      shapes={{
        titleShape: 'circle',
        dotShape: 'circle',
        lineShape: 'solid',
      }}
      setShapes={setShapes}
    />,
  );

  for (let i = 0; i < 12; i++) {
    userEvent.click(screen.getAllByRole('radio')[i]);
    expect(setShapes).toHaveBeenCalledTimes(i + 1);
  }
  expect(setShapes).toHaveBeenCalledTimes(12);
});
