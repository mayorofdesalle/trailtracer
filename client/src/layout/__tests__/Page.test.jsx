import { describe, expect, it, render, screen } from '@app/tester';

import Page from '../Page';

describe('AppContainer', () => {

    it('should render correctly', () => {
        render(<Page />);
        const page = screen.getByRole('main');
        expect(page).toBeInTheDocument();
    });

});