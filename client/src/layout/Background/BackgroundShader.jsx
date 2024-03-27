import { invalidate, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as THREE from 'three';

import textureShader from '@data/textureShader';
import { set } from '@features/backgroundSlice';

const uniforms = {
    u_scale: { value: textureShader.uniforms?.u_scale },
    u_layers: { value: textureShader.uniforms?.u_layers },
    u_distortion: { value: textureShader.uniforms?.u_distortion },
    u_thickness: { value: textureShader.uniforms?.u_thickness },
    u_slope: { value: textureShader.uniforms?.u_slope },
    u_jitter: { value: textureShader.uniforms?.u_jitter },
    u_sharpness: { value: textureShader.uniforms?.u_sharpness },
    u_color: { value: textureShader.uniforms?.u_color },
    u_resolution: { value: textureShader.uniforms?.u_resolution },
};

const fragmentShader = textureShader.fragmentShader;
const vertexShader = textureShader.vertexShader;

/**
 * BackgroundShader
 * @description
 * Shader component that is used to render the texture on the background.
 * The uniforms are updated every frame to match the state of the background.
 * This shader is from the Noise & Texture extension on Figma by Rogie @ https://twitter.com/rogie and Patricio @ https://twitter.com/patriciogv.
 */
const BackgroundShader = () => {
    const material = useRef();
    const dispatch = useDispatch();

    const { animate, distortion, slope, jitter } = useSelector((state) => state.background);
    const speed = animate ? 1 : 100;

    useFrame((state, delta) => {
        const dt = 1 - Math.exp(-speed * (delta > 0.1 ? 0.001 : delta));

        if (material.current) {
            material.current.uniforms.u_distortion.value = THREE.MathUtils.lerp(material.current.uniforms.u_distortion.value, distortion, dt);
            material.current.uniforms.u_slope.value = THREE.MathUtils.lerp(material.current.uniforms.u_slope.value, slope, dt);
            material.current.uniforms.u_jitter.value = THREE.MathUtils.lerp(material.current.uniforms.u_jitter.value, jitter, dt);
        }

        if (animate) {
            if (material.current.uniforms.u_distortion.value.toFixed(3) === distortion.toFixed(3)) dispatch(set({ animate: false }));
            else invalidate();
        }
    });

    invalidate();

    return (
        <shaderMaterial ref={material}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms} />
    );
};

export default BackgroundShader;