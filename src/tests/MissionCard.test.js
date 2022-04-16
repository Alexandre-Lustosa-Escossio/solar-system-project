import MissionCard from "../components/MissionCard";
import { render, screen } from '@testing-library/react'

const missionCardProps = {
    name: 'Some Mission',
    year: 'Some Year',
    country: 'Some Country',
    destination: 'Some Destination'
}

describe('MissionCard tests', () => {
    it('should render the mission\'s name', () => {
        render(<MissionCard { ...missionCardProps } />)
        const missionName = screen.getByText(/some mission/i)
        expect(missionName).toBeInTheDocument()
    });

    it('should render the mission\'s year', () => {
        render(<MissionCard { ...missionCardProps } />)
        const missionYear = screen.getByText(/some year/i)
        expect(missionYear).toBeInTheDocument()
    });

    it('should render the mission\'s country', () => {
        render(<MissionCard { ...missionCardProps } />)
        const missionCountry = screen.getByText(/some country/i)
        expect(missionCountry).toBeInTheDocument()
    });

    it('should render the mission\'s destination', () => {
        render(<MissionCard { ...missionCardProps } />)
        const missionDestination = screen.getByText(/some destination/i)
        expect(missionDestination).toBeInTheDocument()
    });
});