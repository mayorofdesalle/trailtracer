import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useFrame, invalidate } from '@react-three/fiber';

import textureShaderData from '@data/textureShader';

/**
 * ShaderMaterial
 * @description
 * This is the ShaderMaterial component that is used to render the texture on the background.
 * The uniforms are updated every frame to match the state of the background.
 */
const ShaderMaterial = () => {
    const material = useRef();

    const initialUniforms = useMemo(() => ({
        u_scale: { value: textureShaderData.uniforms.u_scale },
        u_layers: { value: textureShaderData.uniforms.u_layers },
        u_distortion: { value: textureShaderData.uniforms.u_distortion },
        u_thickness: { value: textureShaderData.uniforms.u_thickness },
        u_slope: { value: textureShaderData.uniforms.u_slope },
        u_jitter: { value: textureShaderData.uniforms.u_jitter },
        u_sharpness: { value: textureShaderData.uniforms.u_sharpness },
        u_color: { value: textureShaderData.uniforms.u_color },
        u_resolution: { value: textureShaderData.uniforms.u_resolution },
    }), []);

    const fragmentShader = useMemo(() => textureShaderData.fragmentShader, []);
    const vertexShader = useMemo(() => textureShaderData.vertexShader, []);

    const { layers, distortion, slope, jitter } = useSelector((state) => state.background);

    useFrame(() => {
        if (material.current) {
            material.current.uniforms.u_layers = { value: layers };
            material.current.uniforms.u_distortion = { value: distortion };
            material.current.uniforms.u_slope = { value: slope };
            material.current.uniforms.u_jitter = { value: jitter };
        }
    });

    invalidate();

    return (
        <shaderMaterial ref={material}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={initialUniforms}>
        </shaderMaterial>
    );
};

export default ShaderMaterial;