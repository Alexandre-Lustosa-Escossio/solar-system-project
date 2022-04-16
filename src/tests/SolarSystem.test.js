import { render, screen } from "@testing-library/react";
import SolarSystem from "../components/SolarSystem";
import planets from '../data/planets'


describe('Missions Component Tests', () => {
    it('should have a title with the correct headline', () => {
        render(<SolarSystem />)
        const solarSystemTitle = screen.getByRole('heading', { level: 2, name:/planets/i })
        expect(solarSystemTitle).toBeInTheDocument()
    });

    it('should have the correct amount of planets listed', () => {
        render(<SolarSystem />)
        const planetCards = screen.getAllByTestId('planet-card')
        expect(planetCards).toHaveLength(planets.length)
    });

});