import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from './Navbar'

describe ('Navbar component', () => {
    it('renders navbar components correctly', () => {
        render (<Navbar/>);


        expect(screen.getByAltText('Logo do Site')).toBeInTheDocument()
    })
})