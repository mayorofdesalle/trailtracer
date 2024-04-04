import { describe, expect, it, render, screen } from '@app/tester';

import Icon from '../Icon';

describe('Icon', () => {

    it('should render correctly with no props', async () => {
        render(<Icon data-testid='icon' />);
        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();
    });

    it('should render correctly with all props', async () => {
        render(<Icon id='sun-fill' name='sun-fill' color='yellow' />);
        const icon = screen.getByTitle('sun-fill');
        expect(icon).toBeInTheDocument();
    });

});