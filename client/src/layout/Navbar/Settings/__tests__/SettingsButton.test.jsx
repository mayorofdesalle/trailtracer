import { describe, expect, it, render, screen } from '@app/tester';

import SettingsButton from '../SettingsButton';

describe('SettingsButton', () => {

    it('should render correctly', () => {
        render(<SettingsButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        expect(button.firstChild).toBeInTheDocument();
        expect(button.firstChild).toHaveRole('img');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<SettingsButton />);
        expect(asFragment()).toMatchSnapshot();
    });

});