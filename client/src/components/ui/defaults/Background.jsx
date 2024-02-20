import styled from 'styled-components';
import { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Container from './Container';
import textureShaderData from '../../../assets/texShaderData.json';

console.log(textureShaderData);

const TexMesh = () => {
    const mesh = useRef();
    const uniforms = useMemo(() => ({
        u_scale: { value: textureShaderData.uniforms.u_scale },
        u_layers: { value: textureShaderData.uniforms.u_layers },
        u_distortion: { value: textureShaderData.uniforms.u_distortion },
        u_thickness: { value: textureShaderData.uniforms.u_thickness },
        u_slope: { value: textureShaderData.uniforms.u_slope },
        u_jitter: { value: textureShaderData.uniforms.u_jitter },
        u_sharpness: { value: textureShaderData.uniforms.u_sharpness },
        u_color: { value: textureShaderData.uniforms.u_color },
        u_resolution: { value: textureShaderData.uniforms.u_resolution }
    }), []);

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

const gl = {
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
    transparent: true
};

const dpr = [1, 1];

const camera = {
    position: [0, 0, 1]
};

const BackgroundContainer = styled(Container)`
    position: absolute;
    overflow: hidden;
    height: 100svh;
    width: 100svw;
    border-radius: 0;
    background-color: ${({ $color, theme }) => ($color) ? $color : theme.colors.background};
    z-index: -9999;
`;

const Background = () => {
    return (
        <BackgroundContainer>
            <Canvas gl={gl} dpr={dpr} camera={camera}>
                <TexMesh />
            </Canvas>
        </BackgroundContainer>
    );
};

export default Background;