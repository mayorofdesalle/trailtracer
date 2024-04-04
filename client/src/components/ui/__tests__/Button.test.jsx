import { describe, expect, it, render, screen } from '@app/tester';

import Button from '../Button';

describe('Button', () => {

    it('should render correctly with no props', async () => {
        render(<Button>Button</Button>);
        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
    });

    it('should render correctly with all props', async () => {
        render(<Button $type='submit' disabled $bgColor='azure' $color='black' $animColors={['red', 'blue']}>AllPropsButton</Button>);
        const button = screen.getByText('AllPropsButton');
        expect(button).toBeInTheDocument();
        expect(button).to.have.property('type', 'submit');
        expect(button).to.have.property('disabled', true);
    });

});