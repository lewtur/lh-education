import React from 'react';
import styled from 'styled-components';

const ServiceSectionStyles = styled.div`

`;

const ServiceSection = ({ header, children }) => {
  return ( 
    <ServiceSectionStyles>
      <h2>{header}</h2>
      {children}
    </ServiceSectionStyles>
  );
}
 
export default ServiceSection;