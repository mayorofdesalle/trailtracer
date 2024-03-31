import { render, screen, expect, it, vi } from '@app/tester/tester'

import Button from '../Button'

it('Should render correctly with no props', async () => {
    const result = render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeDefined();
    await expect(result).toMatchSnapshot();
});

it('Should render correctly with all props', async () => {
    const result = render(<Button $type="submit" disabled $bgColor="red" $color="blue" $animColors={['red', 'blue']}>AllPropsButton</Button>);
    const button = screen.getByText('AllPropsButton');
    expect(button).toBeDefined();
    expect(button).to.have.property('type', 'submit');
    expect(button).to.have.property('disabled', true);
    await expect(result).toMatchSnapshot();
});