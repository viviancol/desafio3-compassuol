import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Forms from './Forms';


jest.mock('@hookform/resolvers/zod');
jest.mock('./countries-and-cities.json');
describe ('Forms component', () => {
    it('renders Forms components correctly', () => {
        render(<Forms/>);

        expect(screen.getByText('Drive with MyRide')).toBeInTheDocument();
        expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
        expect(screen.getByLabelText('Country')).toBeInTheDocument();
        expect(screen.getByLabelText('City')).toBeInTheDocument();
        expect(screen.getByLabelText('Referral Code')).toBeInTheDocument();
        expect(screen.getByText('I drive my own car')).toBeInTheDocument();

        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('allows you to enter text into text fields', () => {
        render(<Forms/>);

        fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'Vivian Oliveira' } });
        expect(screen.getByLabelText('Full Name')).toHaveValue('Vivian Oliveira');
        
        fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'vivian@topronta.com' } });
        expect(screen.getByLabelText('Email Address')).toHaveValue('vivian@topronta.com');
    });

})