import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import React from 'react'

describe ('Footer component', () => {
    it('renders Footer components correctly', () => {
        render (<Footer/>);

        expect(screen.getByAltText('Logo do site no rodapé')).toBeInTheDocument()
        expect(screen.getByAltText('icone facebook')).toBeInTheDocument()

        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();

        expect(screen.getByText('Support')).toBeInTheDocument();
        expect(screen.getByText('FAQ')).toBeInTheDocument();


    });
    
})