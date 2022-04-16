import { render, screen } from "@testing-library/react";
import PlanetCard from "../components/PlanetCard";


describe('PlanetCard component tests', () => {
    it('should render a div with the correct data-testid', () => {
        render(<PlanetCard planetName={ 'mars' } planetImage= { 'someUrl' }/>)
        const planetCard = screen.getByTestId('planet-card')    
        expect(planetCard).toBeInTheDocument()
    });

    it('should render the name of the planet', () => {
        render(<PlanetCard planetName={ 'mars' } planetImage= { 'someUrl' }/>)
        const planetName = screen.getByText(/mars/i)    
        expect(planetName).toBeInTheDocument()
    });

    it('should render an img tag with the correct url and alt prop', () => {
        render(<PlanetCard planetName={ 'mars' } planetImage= { 'someUrl' }/>)
        const planetImg = screen.getByRole('img')    
        expect(planetImg).toBeInTheDocument()
        expect(planetImg).toHaveAttribute('src', 'someUrl')
        expect(planetImg).toHaveAttribute('alt', 'planet')
    });
    
});