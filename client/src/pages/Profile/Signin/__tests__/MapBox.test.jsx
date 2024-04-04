import { describe, expect, it, render, screen } from '@app/tester';

import MapBox from '../MapBox';

describe('MapBox', () => {

    it('should render correctly', () => {
        render(<MapBox data-testid='map-box' />);
        const mapBox = screen.getByTestId('map-box');
        expect(mapBox).toBeInTheDocument();
        expect(mapBox).toHaveStyle({ gridArea: 'MapBox' });
    });

});