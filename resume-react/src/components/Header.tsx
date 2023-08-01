import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>Header</StyledHeader>
    );
}

export default Header;
