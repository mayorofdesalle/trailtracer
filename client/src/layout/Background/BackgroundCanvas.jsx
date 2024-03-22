import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

import Shader from './BackgroundShader';

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
 * BackgroundCanvas
 * @description
 * R3F Canvas to render the shader on.
 **/
const BackgroundCanvas = ({ width, height }) => {
    return (
        <Canvas gl={GL} orthographic camera frameloop='demand' dpr={[1, 1]}>
            <mesh>
                <planeGeometry args={[width, height]} />
                <Shader />
            </mesh>
        </Canvas>
    );
};

BackgroundCanvas.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

export default BackgroundCanvas;