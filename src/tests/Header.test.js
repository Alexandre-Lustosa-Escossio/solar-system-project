import Header from "../components/Header";
import React from "react";
import {render, screen} from '@testing-library/react'

describe('tests header component', () => {
    it('should render a h1 tag with /solar system/i text', () => {
        render(<Header />)
        const pageHeading = screen.getByRole('heading', {level:1, name:/solar system/i})
        expect(pageHeading).toBeInTheDocument()
    });
})