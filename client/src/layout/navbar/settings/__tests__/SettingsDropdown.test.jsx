import { describe, expect, it, render, screen, vi } from '@app/tester';

import SettingsDropdown from '../SettingsDropdown';

describe('SettingsDropdown', () => {

    it('should render correctly', () => {
        render(<SettingsDropdown close={vi.fn()} data-testid='settings-dropdown' />);
        const dropdown = screen.getByTestId('settings-dropdown');
        expect(dropdown).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<SettingsDropdown close={vi.fn()} />);
        expect(asFragment()).toMatchSnapshot();
    });

});