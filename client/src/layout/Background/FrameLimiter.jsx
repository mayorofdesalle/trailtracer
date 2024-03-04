import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import PropTypes from 'prop-types';

const FrameLimiter = ({ limit = 30 }) => {
    const { invalidate, clock } = useThree();

    useEffect(() => {
        let delta = 0;
        const interval = 1 / limit;
        const update = () => {
            requestAnimationFrame(update);
            delta += clock.getDelta();

            if (delta > interval) {
                invalidate();
                delta = delta % interval;
            }
        };

        update();
    }, [clock, invalidate, limit]);

    return <></>;
};

FrameLimiter.propTypes = {
    limit: PropTypes.number,
};

export default FrameLimiter;