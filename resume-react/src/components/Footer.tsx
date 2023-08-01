import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer: React.FC = () => {
    return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
