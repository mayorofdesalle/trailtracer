import { describe, expect, it, render, screen } from '@app/tester';

import DisplayWarning from '../DisplayWarning';

describe('DisplayWarning', () => {

    it('should render correctly', () => {
        render(<DisplayWarning />);
        const warning = screen.getByRole('status');
        expect(warning).toBeInTheDocument();
    });

});