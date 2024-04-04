import { describe, expect, it, render, screen } from '@app/tester';

import Pagination from '../Pagination';

describe('Pagination', () => {

    it('should render correctly', () => {
        render(<Pagination />);
        const pageDots = screen.getAllByRole('button');
        expect(pageDots).toHaveLength(4);
        pageDots.forEach(dot => expect(dot).toBeInTheDocument());
    });

});