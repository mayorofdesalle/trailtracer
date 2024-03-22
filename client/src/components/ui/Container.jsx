import styled from 'styled-components';

/**
 * Container
 * @description
 * Default styled div component to hold other components.
 **/
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: max(0.5dvh, 0.5dvw, 0.5rem);
`;

export default Container;
