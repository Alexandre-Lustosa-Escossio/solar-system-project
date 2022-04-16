import { render, screen } from "@testing-library/react";
import Missions from "../components/Missions";
import missions from '../data/missions'


describe('Missions Component Tests', () => {
    it('should have a title with the correct headline', () => {
        render(<Missions />)
        const missionsTitle = screen.getByRole('heading', { level: 2, name:/missions/i })
        expect(missionsTitle).toBeInTheDocument()
    });

    it('should have the correct amount of missions listed', () => {
        render(<Missions />)
        const missionCards = screen.getAllByTestId('mission-card')
        expect(missionCards).toHaveLength(missions.length)
    });

});