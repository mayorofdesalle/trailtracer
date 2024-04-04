import { describe, expect, it, render, screen } from '@app/tester';

import Bento from '../Bento';

describe('Bento', () => {

    it('should render correctly', () => {
        render(<Bento data-testid='bento' />);
        const bento = screen.getByTestId('bento');

        expect(bento).toBeInTheDocument();
    });

});