import React from 'react';
import styled from 'styled-components';

const WhoWeAreStyles = styled.section`
  font-size: 1.25rem;
    line-height: 2rem;
`;

const WhoWeAre = () => {
  return ( 
    <WhoWeAreStyles>
      <h1>Who we are</h1>
      <p>
        LH Educational Services Ltd are a team of expert educators. Years of teaching experience, 
        exam success and curriculum development are coupled with a knowledge of the inner workings of 
        the professional sports industry to allow for exam success that fits around sporting commitments.
      </p>
      <p>
        Each teacher is handpicked with professionalism, subject knowledge and exam achievement in mind, 
        giving you the confidence and reassurance that your students are in the very best hands to succeed.
      </p>
      <p>
        All of our teachers provide a confidential, discrete and flexible service, working within 
        deadlines to achieve challenging targets. 
      </p>
    </WhoWeAreStyles>
  );
}
 
export default WhoWeAre;