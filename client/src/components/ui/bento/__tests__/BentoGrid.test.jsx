import { describe, expect, it, render, screen } from '@app/tester';

import BentoGrid from '../BentoGrid';

describe('BentoGrid', () => {

    it('should render correctly', () => {
        render(<BentoGrid />);
        const bentoGrid = screen.getByRole('grid');

        expect(bentoGrid).toBeInTheDocument();
    });

});