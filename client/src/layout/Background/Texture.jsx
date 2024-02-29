import { Canvas } from '@react-three/fiber';

import ShaderMaterial from './ShaderMaterial';

// GL settings
const GL = {
	powerPreference: 'low-power',
	preserveDrawingBuffer: true,
	premultipliedAlpha: false,
	transparent: true,
};

/**
 * Texture
 * @description
 * This component uses the Canvas component from the @react-three/fiber package to render the mesh.
 **/
const Texture = () => {
	return (
		<Canvas gl={GL} frameloop='demand'>
			<mesh>
				<planeGeometry args={[24, 24]} />
				<ShaderMaterial />
			</mesh>
		</Canvas>
	);
};

export default Texture;
