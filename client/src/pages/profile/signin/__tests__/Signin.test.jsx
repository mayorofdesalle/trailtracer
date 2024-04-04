import { describe, expect, it, render, screen } from '@app/tester';

import Signin from '../Signin';

describe('Signin', () => {

    it('should render correctly', () => {
        render(<Signin />);
        const signin = screen.getByRole('main');

        expect(signin).toBeInTheDocument();
    });

});