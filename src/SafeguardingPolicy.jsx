import React from 'react';
import styled from 'styled-components';

const SafeguardingPolicyStyles = styled.section`
  font-size: 1rem;
  line-height: 1.7rem;
`;

const SafeguardingPolicy = () => {
  return ( 
      <SafeguardingPolicyStyles>
        <h1>Safeguarding Policy</h1>
        <p>
          LH Educational Services Ltd take the safety and welfare of children, young people and 
          vulnerable people incredibly seriously and always operate within the confines of Safeguarding Law. 
        </p>
        <p>Click <a href="#">here</a> to see our safeguarding policy</p>
      </SafeguardingPolicyStyles>
  );
}
 
export default SafeguardingPolicy;