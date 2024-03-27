import ContentLoader from 'react-content-loader';
import styled, { useTheme } from 'styled-components';

const BentoLoaderInner = styled(ContentLoader)`
    width: 100%;
    height: 100%;
`;

export const BentoLoader = () => {
    const theme = useTheme();

    return (
        <BentoLoaderInner
            backgroundColor={theme.colors.primaryTransparent}
            foregroundColor={theme.colors.primary}
        >
            <rect rx='8px' ry='8px'
                x='16px'
                y='16px'
                width='calc((100% - 64px) * 0.3)'
                height='calc((100% - 48px) * 0.25)' />

            <rect rx='8px' ry='8px'
                x='16px'
                y='calc(32px + (100% - 48px) * 0.25)'
                width='calc((100% - 64px) * 0.3)'
                height='calc((100% - 48px) * 0.75)' />

            <rect rx='8px' ry='8px'
                x='calc(32px + (100% - 64px) * 0.3)'
                y='16px'
                width='calc((100% - 64px) * 0.4)'
                height='calc((100% - 48px) * 0.5)' />

            <rect rx='8px' ry='8px'
                x='calc(32px + (100% - 64px) * 0.3)'
                y='calc(32px + (100% - 48px) * 0.5)'
                width='calc((100% - 64px) * 0.4)'
                height='calc((100% - 48px) * 0.5)' />

            <rect rx='8px' ry='8px'
                x='calc(48px + (100% - 64px) * 0.7)'
                y='16px'
                width='calc((100% - 64px) * 0.3)'
                height='calc((100% - 48px) * 0.75)' />

            <rect rx='8px' ry='8px'
                x='calc(48px + (100% - 64px) * 0.7)'
                y='calc(32px + (100% - 48px) * 0.75)'
                width='calc((100% - 64px) * 0.3)'
                height='calc((100% - 48px) * 0.25)' />

        </BentoLoaderInner>
    );
};

export const SmallBentoLoader = () => {
    const theme = useTheme();

    return (
        <BentoLoaderInner
            backgroundColor={theme.colors.primaryTransparent}
            foregroundColor={theme.colors.primary}
        >
            <rect rx='8px' ry='8px'
                x='16px'
                y='16px'
                width='calc(100% - 32px)'
                height='calc((100% - 64px) * 0.4)' />

            <rect rx='8px' ry='8px'
                x='16px'
                y='calc(32px + (100% - 64px) * 0.4)'
                width='calc(100% - 32px)'
                height='calc((100% - 64px) * 0.3)' />

            <rect rx='8px' ry='8px'
                x='16px'
                y='calc(48px + (100% - 64px) * 0.7)'
                width='calc(100% - 32px)'
                height='calc((100% - 64px) * 0.3)' />
        </BentoLoaderInner>
    );
};