import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from './BookingForm';
import React from 'react'

describe ('BookingForm component', () => {
    it('renders BookingForm components correctly', () => {
        render(<BookingForm/>);

        expect(screen.getByPlaceholderText('Current Location')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Your Destination')).toBeInTheDocument()

        expect(screen.getByText('Find a ride now')).toBeInTheDocument()
        expect(screen.getByText('NEED A RIDE?')).toBeInTheDocument();
        expect(screen.getByText('Book with my RIDE now!')).toBeInTheDocument();

        expect(screen.getByLabelText('Your Pickup')).toBeInTheDocument()
        expect(screen.getByLabelText('Your Destination')).toBeInTheDocument()
    });
    
    it('allows you to enter text into text fields', () => {
        render(<BookingForm/>);

        fireEvent.change(screen.getByLabelText('Your Pickup'), { target: { value: 'Current location' } });
        expect(screen.getByLabelText('Your Pickup')).toHaveValue('Current location');
        
        fireEvent.change(screen.getByLabelText('Your Destination'), { target: { value: 'Your Destination' } });
        expect(screen.getByLabelText('Your Destination')).toHaveValue('Your Destination');
    });
})