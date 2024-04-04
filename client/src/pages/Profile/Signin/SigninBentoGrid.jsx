import styled from 'styled-components';

import { BentoGrid } from '@components/ui/bento';

/**
 * SigninBentoGrid
 * @description
 * Styled container to provide the grid layout to the bento.
 **/
const SigninBentoGrid = styled(BentoGrid)`
    grid-template-columns: 2fr 3fr 1.25fr 0.75fr;
    grid-template-rows: 5fr 1fr 2fr;
    grid-template-areas:
        'ImageBox   MapBox    SignBox    SignBox'
        'CTABox     MapBox    SignBox    SignBox'
        'CTABox     MapBox    TermsBox   HelpBox';

    /* Medium screens and downwards */
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 2fr 1fr 0.5fr;
        grid-template-areas:
            'SignBox    SignBox   SignBox'
            'TermsBox   ImageBox    HelpBox'
            'CTABox     CTABox      CTABox';
    }
`;

export default SigninBentoGrid;