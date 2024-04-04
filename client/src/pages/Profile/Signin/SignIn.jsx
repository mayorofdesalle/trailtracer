import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { useWindowSize } from '@hooks';
import Page from '@layout/Page';

import SigninBentoGrid from './SigninBentoGrid';
import CTABox from './CTABox';
import HelpBox from './HelpBox';
import ImageBox from './ImageBox';
import MapBox from './MapBox';
import TermsBox from './TermsBox';
import SigninBox from './signinBox/SigninBox';

const SignIn = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <Page>
            <SigninBentoGrid>
                <ImageBox />
                <CTABox />
                {largeScreen && <MapBox />}
                <SigninBox />
                <TermsBox />
                <HelpBox />
            </SigninBentoGrid>
        </Page>
    );
};

export default SignIn;