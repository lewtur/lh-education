import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background-color: #333;
  margin-top: 8rem;
`;

const Copyright = styled.div`
  font-size: 1rem;
  padding: 2rem;
  color: #e2e2e2;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Copyright>
        © LHES {new Date().getFullYear()}
      </Copyright>
    </FooterStyles>);
}

export default Footer;