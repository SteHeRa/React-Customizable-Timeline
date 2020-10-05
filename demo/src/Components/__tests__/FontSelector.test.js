import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FontSelector from '../FontSelector/FontSelector.tsx';

describe('FontSelector', () => { 
    it('should render default option on screen', () => {
        render (<FontSelector/>)
        expect(screen.getByText('Select a font'));
})
})

describe('FontSelector', () => { 
    it('should call setFont function', () => {
        const setFont = jest.fn();
        render (<FontSelector setFont={setFont}/>);
        fireEvent.change(screen.getByRole('combobox'))
        expect(setFont).toHaveBeenCalled();
})
});



