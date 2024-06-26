import { describe, expect, it, render, screen } from '@app/tester';

import LanguageSelector from '../LanguageSelector';

describe('LanguageSelector', () => {

    it('should render correctly', () => {
        render(<LanguageSelector />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
    });

});