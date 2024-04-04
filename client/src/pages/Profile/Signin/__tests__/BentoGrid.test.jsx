import { describe, expect, it, render, screen } from '@app/tester';

import SigninBentoGrid from '../SigninBentoGrid';

describe('SigninBentoGrid', () => {

    it('should render correctly', () => {
        render(<SigninBentoGrid />);
        const grid = screen.getByRole('grid');
        expect(grid).toBeInTheDocument();
    });

});