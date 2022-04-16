import { render, screen } from "@testing-library/react";
import Title from "../components/Title";


describe('tests title component', () => {
    it('should have a h2 tag with the headline text', () => {
        render(<Title />)
        const heading = screen.getByRole('heading', { level:2 })
        expect(heading).toBeInTheDocument()
    });
 })