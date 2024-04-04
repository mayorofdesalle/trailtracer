import { describe, expect, it, render, screen } from '@app/tester';

import Container from '../Container';

describe('Container', () => {

    it('should render correctly', () => {
        render(<Container data-testid='container' />);
        const container = screen.getByTestId('container');
        expect(container).toBeInTheDocument();
    });

});