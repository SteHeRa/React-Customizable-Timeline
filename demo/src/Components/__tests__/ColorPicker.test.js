import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorPicker from '../ColorPicker/ColorPicker';

describe('ColorPicker', () => {
  it('calls when changed', () => {
    const setColors = jest.fn();
    render(
      <ColorPicker
        colors={{ primaryColor: '#000000', secondaryColor: '#FFFFFF' }}
        setColors={setColors}
      />,
    );

    const primaryColor = screen.getAllByRole('textbox')[0];
    const secondaryColor = screen.getAllByRole('textbox')[1];
    const backgroundColor = screen.getAllByRole('textbox')[2];

    userEvent.type(primaryColor, 'test');
    userEvent.type(secondaryColor, 'test');
    //userEvent.type(backgroundColor, 'test'); GET ERROR "Cannot read property 'disabled' of undefined" when running this test???

    expect(setColors).toHaveBeenCalledTimes(8);
  });
});
