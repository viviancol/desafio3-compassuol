import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'
import React from 'react'

describe ('Navbar component', () => {
    it('renders navbar components correctly', () => {
        render(<Navbar/>);

        expect(screen.getByAltText('Logo do Site')).toBeInTheDocument()
        expect(screen.getByLabelText('Menu principal')).toBeInTheDocument()

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Getting a Taxi')).toBeInTheDocument();
        expect(screen.getByText('Mobile App')).toBeInTheDocument();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();

    });
    
    it('changes active tab on click', () => {
        render(<Navbar/>);

        fireEvent.click(screen.getByText('Getting a Taxi'));
        expect(screen.getByText('Getting a Taxi')).toHaveStyle({color:'#FBA403'});
    });

    it('displays notification bell and user image', () => {
        render(<Navbar/>);

        expect(screen.getByAltText('Alerta de Notificação')).toBeInTheDocument();
        expect(screen.getByAltText('Imagem do Usuário')).toBeInTheDocument();
    });
})