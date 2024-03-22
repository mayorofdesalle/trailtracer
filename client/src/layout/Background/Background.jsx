import { useMemo, Suspense, lazy, memo } from 'react';
import styled from 'styled-components';

import useWindowSize from '@hooks/useWindowSize';
import Container from '@components/ui/Container';

import Image from './BackgroundImage';
const Canvas = lazy(() => import('./BackgroundCanvas'));

const BackgroundContainer = memo(styled(Container)`
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: -999;
    overflow: hidden;
`);

/**
 * Background
 * @description
 * Background for the entire application.
 **/
const Background = () => {
	const { width, height } = useWindowSize();
	const isUsingWebkit = useMemo(() => typeof window.webkitConvertPointFromNodeToPage === 'function', []);

	return (
		<BackgroundContainer>
			{// Webkit has problems with premultipliedAlpha so the shader does not work properly
				isUsingWebkit ? <Image /> :
					<Suspense fallback={<Image />}>
						<Canvas width={width} height={height} />
					</Suspense>}
		</BackgroundContainer>
	);
};

export default Background;
