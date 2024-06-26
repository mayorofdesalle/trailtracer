import { describe, expect, it, render, screen } from '@app/tester';

import NavbarLogo from '../NavbarLogo';

describe('NavbarLogo', () => {

    it('should render correctly', () => {
        render(<NavbarLogo />);
        const logo = screen.getByRole('button');
        expect(logo).toBeInTheDocument();
    });

});