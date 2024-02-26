import { Canvas } from '@react-three/fiber';

import TextureMesh from './TextureMesh';

// GL settings
const GL = {
	preserveDrawingBuffer: true,
	premultipliedAlpha: false,
	transparent: true,
};

/**
 * Texture
 * @description
 * This is the Texture component that is used to render the TextureMesh component.
 * It uses the Canvas component from the @react-three/fiber package to render the TextureMesh component.
 * It also sets the GL settings for the Canvas component.
 **/
const Texture = () => {
	return (
		<Canvas gl={GL} frameloop='demand'>
			<TextureMesh />
		</Canvas>
	);
};

export default Texture;
