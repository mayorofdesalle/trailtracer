import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';

import useWindowSize from '@hooks/useWindowSize';
import BackgroundContainer from './BackgroundContainer';
import Image from './Image';
import Shader from './Shader';

// GL settings
const GL = {
	powerPreference: 'low-power',
	precision: 'lowp',
	failIfMajorPerformanceCaveat: true,
	preserveDrawingBuffer: false,
	premultipliedAlpha: false,
	alpha: false,
	transparent: false,
	antialias: true
};

/**
 * Background
 * @description
 * This is the main background for the application.
 **/
const Background = () => {
	const { width, height } = useWindowSize();
	const isUsingWebkit = useMemo(() => typeof window.webkitConvertPointFromNodeToPage === 'function', []);

	return (
		<BackgroundContainer $adjustingDimension={width > height ? 0 : 1}>
			{isUsingWebkit ? // Fallback since webkit has problems with premultipliedAlpha
				<Image />
				:
				<Canvas gl={GL} orthographic camera frameloop='demand' dpr={[1, 1]}>
					<mesh>
						<planeGeometry args={[width, height]} />
						<Shader />
					</mesh>
				</Canvas>
			}
		</BackgroundContainer>
	);
};

export default Background;
