import { describe, expect, it, render, screen } from '@app/tester';

import Dropdown from '../Dropdown';

describe('Dropdown', () => {

    it('should render correctly', () => {
        render(<Dropdown data-testid='dropdown' />);
        const dropdown = screen.getByTestId('dropdown');
        expect(dropdown).toBeInTheDocument();
        expect(dropdown).to.have.property('tabIndex', 0);
    });

});