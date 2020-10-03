import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AnimationToggle from '../AnimationToggle/AnimationToggle.tsx';

describe('AnimationToggle', () => {
  it('calls when clicked', () => {
    const setAnimation = jest.fn();
    render(<AnimationToggle setAnimation={setAnimation} />);

    fireEvent.click(screen.getByRole('button'));

    expect(setAnimation).toHaveBeenCalled();
  });
});
