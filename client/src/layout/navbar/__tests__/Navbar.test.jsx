import { describe, expect, it, render, screen } from '@app/tester';

import Navbar from '../Navbar';

describe('Navbar', () => {

    it('should render correctly', () => {
        render(<Navbar />);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<Navbar />);
        expect(asFragment()).toMatchSnapshot();
    });

});