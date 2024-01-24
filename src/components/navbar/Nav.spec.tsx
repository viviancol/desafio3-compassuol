import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'
import React from 'react'

describe ('Navbar component', () => {
    it('renders navbar components correctly', () => {
        render (<Navbar/>);

        expect(screen.getByAltText('Logo do Site')).toBeInTheDocument()
        expect(screen.getByLabelText('Menu principal')).toBeInTheDocument()
        expect(screen.getByText('Getting a Taxi')).toBeInTheDocument()
    });
    
    it('changes active tab on click', () => {
        render (<Navbar/>);

        fireEvent.click(screen.getByText('Getting a Taxi'));

        expect(screen.getByText('Getting a Taxi')).toHaveStyle({color:'#FBA403'});
    });
})