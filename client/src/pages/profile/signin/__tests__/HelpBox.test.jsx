import { describe, expect, it, render, screen } from '@app/tester';

import HelpBox from '../HelpBox';

describe('HelpBox', () => {

    it('should render correctly', () => {
        render(<HelpBox />);
        const helpBox = screen.getByRole('button');
        expect(helpBox).toBeInTheDocument();
        expect(helpBox).toHaveStyle({ gridArea: 'HelpBox' });

        expect(helpBox).toHaveTextContent(/help/i);

        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();
    });

});