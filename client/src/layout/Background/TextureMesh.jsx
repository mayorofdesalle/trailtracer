import { useRef, useMemo } from 'react';

import textureShaderData from '@data/textureShader.json';

/**
 * TextureMesh
 * @description
 * This is a mesh that is used to display a texture on the background.
 * It uses the textureShaderData object to get the vertex and fragment shaders, and the uniforms.
 * The mesh is a plane that is the size of the window.
 * The shader material is used to apply the texture to the mesh.
 **/
const TextureMesh = () => {
	const mesh = useRef();
	const uniforms = useMemo(
		() => ({
			u_scale: { value: textureShaderData.uniforms.u_scale },
			u_layers: { value: textureShaderData.uniforms.u_layers },
			u_distortion: { value: textureShaderData.uniforms.u_distortion },
			u_thickness: { value: textureShaderData.uniforms.u_thickness },
			u_slope: { value: textureShaderData.uniforms.u_slope },
			u_jitter: { value: textureShaderData.uniforms.u_jitter },
			u_sharpness: { value: textureShaderData.uniforms.u_sharpness },
			u_color: { value: textureShaderData.uniforms.u_color },
			u_resolution: { value: textureShaderData.uniforms.u_resolution },
		}),
		[],
	);

	return (
		<mesh ref={mesh}>
			<planeGeometry args={[window.innerWidth, window.innerHeight]} />
			<shaderMaterial
				fragmentShader={textureShaderData.fragmentShader}
				vertexShader={textureShaderData.vertexShader}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

export default TextureMesh;
