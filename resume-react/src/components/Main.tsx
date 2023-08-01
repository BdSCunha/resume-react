import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main: React.FC = () => {
    return <StyledMain>Content</StyledMain>;
};

export default Main;
