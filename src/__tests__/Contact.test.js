import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact';
import '@testing-library/jest-dom'

describe('Contact Component', () => {
    it('should render Contact component', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading')

        //Asssertion
        expect(heading).toBeInTheDocument();

    })

    it('should load button inside contact component', () => {
        render(<Contact />);

        const button = screen.getByText('Submit')

        //Asssertion
        expect(button).toBeInTheDocument();

    })

    it('should load input name inside contact component', () => {
        render(<Contact />);

        const input = screen.getByPlaceholderText("Your Name")

        //Asssertion
        expect(input).toBeInTheDocument()

    })

    it('should load 2 input name inside contact component', () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole('textbox')

        //Asssertion
        expect(inputBoxes.length).toBe(2)
    })
});
