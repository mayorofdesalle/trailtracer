import { Canvas } from '@react-three/fiber';

import useWindowSize from '@hooks/useWindowSize';

import BackgroundContainer from './BackgroundContainer';
import Shader from './Shader';

// GL settings
const GL = {
	powerPreference: 'low-power',
	precision: 'lowp',
	failIfMajorPerformanceCaveat: true,
	preserveDrawingBuffer: true,
	premultipliedAlpha: false,
	transparent: true,
};

/**
 * Background
 * @description
 * This is the main background for the application.
 **/
const Background = () => {
	const windowSize = useWindowSize();

	return (
		<BackgroundContainer>
			<Canvas gl={GL} orthographic camera frameloop='demand' dpr={[1, 1]}>
				<mesh>
					<planeGeometry args={[windowSize.width, windowSize.height]} />
					<Shader />
				</mesh>
			</Canvas>
		</BackgroundContainer>
	);
};

export default Background;
