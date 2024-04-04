import { describe, expect, it, render, screen, vi } from '@app/tester';

import ExploreDropdown from '../ExploreDropdown';

describe('ExploreDropdown', () => {

    it('should render correctly', () => {
        render(<ExploreDropdown data-testid='explore-dropdown' />);
        const dropdown = screen.getByTestId('explore-dropdown');
        expect(dropdown).toBeInTheDocument();
        expect(dropdown.firstChild).toBeInTheDocument();
        expect(dropdown.firstChild).toHaveTextContent(/explore/i);
    });

});