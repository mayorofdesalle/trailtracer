import { describe, expect, it, render, screen, vi } from '@app/tester';

import ExploreButton from '../ExploreButton';

describe('ExploreButton', () => {

    it('should render correctly', () => {
        render(<ExploreButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        expect(button.firstChild).toBeInTheDocument();
        expect(button.firstChild).toHaveRole('img');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<ExploreButton />);
        expect(asFragment()).toMatchSnapshot();
    });

});