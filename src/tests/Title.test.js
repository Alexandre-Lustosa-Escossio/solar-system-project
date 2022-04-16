import { render, screen } from "@testing-library/react";
import Title from "../components/Title";


describe('tests title component', () => {
    it('should have a h2 tag with the headline text', () => {
        render(<Title headline="some headline"/>)
        const heading = screen.getByRole('heading', { level:2, name:/some headline/i })
        expect(heading).toBeInTheDocument()
    });
 })