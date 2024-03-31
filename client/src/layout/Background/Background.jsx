import { getGPUTier } from 'detect-gpu';
import { Suspense, lazy, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import logger from '@app/logger';
import Container from '@components/ui/Container';
import useWindowSize from '@hooks/useWindowSize';

import Image from './BackgroundImage';
const Canvas = lazy(() => import('./BackgroundCanvas'));

const frameTiers = [0, 200, 400, 600];

const GPUReducer = (state, action) => {
	switch (action.type) {
		case 'SET_GPU_TIER':
			return { ...state, gpuTier: action.payload };
		case 'SET_IS_MOBILE':
			return { ...state, isMobile: action.payload };
		case 'SET_IS_WEBKIT':
			return { ...state, isWebkit: action.payload };
		default:
			return state;
	}
};

const BackgroundContainer = styled(Container)`
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: -999;
    overflow: hidden;
`;

/**
 * Background
 * @description
 * Background for the entire application.
 **/
const Background = () => {
	const { width, height } = useWindowSize();
	const [envInfo, dispatch] = useReducer(GPUReducer, { gpuTier: 0, isMobile: false, isWebkit: false });

	useEffect(() => {
		getGPUTier({ desktopTiers: frameTiers, mobileTiers: frameTiers })
			.then((gpuTier) => {
				logger.info('GPUINFO:', gpuTier, `WEBKIT: ${typeof window.webkitConvertPointFromNodeToPage === 'function'}`);
				dispatch({ type: 'SET_GPU_TIER', payload: gpuTier.tier });
				dispatch({ type: 'SET_IS_MOBILE', payload: gpuTier.isMobile });
				dispatch({ type: 'SET_IS_WEBKIT', payload: typeof window.webkitConvertPointFromNodeToPage === 'function' });
			});
	}, []);



	return (
		<BackgroundContainer>
			<Suspense fallback={<Image />}>
				{// Webkit has problems with premultipliedAlpha so the shader does not work properly
					envInfo.isWebkit || envInfo.isMobile || envInfo.gpuTier < 2
						? <Image />
						: <Canvas width={width} height={height} />
				}
			</Suspense>
		</BackgroundContainer>
	);
};

export default Background;
