import styled from 'styled-components';

import Grid from '@components/ui/Bento/Grid';

/**
 * BentoGrid
 * @description
 * This is a styled container that is used to provide the grid layout of the bento.
 **/
const BentoGrid = styled(Grid)`
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        '.   UserBox     UserBox       SigninBox   SigninBox'
        '.   SignupBox   SignupBox     SigninBox   SigninBox'
        '.   SignupBox   SignupBox     SigninBox   SigninBox'
        '.   SignupBox   SignupBox     TermsBox    HelpBox';

    /* Medium screens and downwards */
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) or (max-aspect-ratio: 1) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 2fr repeat(2, 0.5fr);
        grid-template-areas:
            'SigninBox  SigninBox   SigninBox'
            'TermsBox   UserBox     HelpBox'
            'SignupBox  SignupBox   SignupBox';
    }
`;

export default BentoGrid;