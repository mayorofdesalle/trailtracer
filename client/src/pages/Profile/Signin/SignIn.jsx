import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import useWindowSize from '@hooks/useWindowSize';
import Page from '@layout/Page';
import PageContext from '@context/PageContext';

import BentoGrid from './BentoGrid';
import HelpBox from './HelpBox';
import ImageBox from './ImageBox';
import MapBox from './MapBox';
import SigninBox from './SigninBox/SigninBox';
import CTABox from './CTABox';
import TermsBox from './TermsBox';

const SignIn = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { height, width } = useWindowSize();
    const largeScreen = width > theme.breakpoints.medium && width / height > 1;

    return (
        <Page>
            <PageContext.Provider value={{ theme: theme, t: t, largeScreen: largeScreen }}>
                <BentoGrid>
                    <ImageBox />
                    <CTABox />
                    {largeScreen && <MapBox />}
                    <SigninBox />
                    <TermsBox />
                    <HelpBox />
                </BentoGrid>
            </PageContext.Provider>
        </Page>
    );
};

export default SignIn;