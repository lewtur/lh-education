import React from 'react';
import styled from 'styled-components';

const WhatWeDoStyles = styled.section`
    font-size: 1rem;
    line-height: 1.7rem;
`;

const WhatWeDo = () => {
    return ( 
        <WhatWeDoStyles id="what-we-do">
            <h1>What we do</h1>
            <p>
                Quality teaching is at the heart of everything we do. Our aim is to ensure that students are
                consistently engaged, challenged and improving as a result of the provision we are
                providing. Whether you operate a hybrid day release training model or a full time one, we
                are familiar with the unique environment of sporting institutions and are dedicated to
                ensuring lessons work harmoniously alongside sporting commitments.
            </p>
            <p>
                We provide challenging and engaging teaching across a range of subjects and qualifications
                including:
            </p>
            <ul>
                <li>GCSE English, Maths and Science</li>
                <li>History, RE, and a range of subjects</li>
                <li>ESOL lessons</li>
                <li>Functional Skills in English and Maths</li>
                <li>BTEC in Sport</li>
            </ul>
            <p>
                All our lessons can be delivered on a full class basis, small group sessions or one to one.
            </p>
            <p>
                We also operate outside of the classroom, facilitating quality training sessions and creating
                schemes of learning across a wide range of topics. Got an educational project coming up?
                Have an idea for a new educational initiative? Get in touch to see how we can help.
            </p>
        </WhatWeDoStyles>
     );
}
 
export default WhatWeDo;