import { describe, expect, it, render, screen } from '@app/tester';

import Vector from '../Vector';

describe('Vector', () => {

    it('should render correctly with no props', async () => {
        render(<Vector data-testid='vector' />);
        const vector = screen.getByTestId('vector');
        expect(vector).toBeInTheDocument();
    });

    it('should render correctly with all props', async () => {
        render(<Vector $height='1rem' $width='1rem' $color='black' $name='arrowUp' $position='center' data-testid='all-props-vector' />);
        const vector = screen.getByTestId('all-props-vector');
        expect(vector).toBeInTheDocument();
    });

});