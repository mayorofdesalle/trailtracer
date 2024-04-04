import { describe, expect, it, render, screen } from '@app/tester';

import Separator from '../Separator';

describe('Separator', () => {

    it('should render correctly', () => {
        render(<Separator />);
        const separator = screen.getByRole('separator');
        expect(separator).toBeInTheDocument();
    });

});