import { describe, expect, it, render, screen } from '@app/tester';

import BackgroundImage from '../BackgroundImage';

describe('BackgroundImage', () => {

    it('should render correctly', () => {
        render(<BackgroundImage data-testid='background-image' />);
        expect(screen.getByTestId('background-image')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BackgroundImage />);
        expect(asFragment()).toMatchSnapshot();
    });

});