import { describe, expect, it, render, screen, vi } from '@app/tester';

import NavbarButton from '../NavbarButton';

describe('NavbarButton', () => {

    it('should render correctly', () => {
        render(<NavbarButton onClick={vi.fn()} icon='forbid' />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

});