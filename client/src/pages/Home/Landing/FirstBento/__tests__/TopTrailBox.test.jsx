import { describe, expect, it, render, screen } from '@app/tester';

import TopTrailBox from '../TopTrailBox';

describe('TopTrailBox', () => {

    it('should render correctly', () => {
        render(<TopTrailBox data-testid='top-trail-box' />);
        const topTrailBox = screen.getByTestId('top-trail-box');

        expect(topTrailBox).toBeInTheDocument();
        expect(topTrailBox).toHaveStyle('grid-area: TopTrailBox');
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<TopTrailBox />);
        expect(asFragment()).toMatchSnapshot();
    });

});