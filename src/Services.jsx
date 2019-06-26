import React from 'react';
import styled from 'styled-components';
import ServiceSection from './ServiceSection';

const ServicesStyles = styled.section`
  font-size: 1rem;
  line-height: 1.7rem;
  h1 {
    padding-bottom: 0.75rem;
  }
`;

const Services = () => {
  return ( 
    <ServicesStyles id="services">
      <h1>Services</h1>
      <ServiceSection header={'SAT and ACT preparation'}>
        <p>
          More and more, professional athletes are choosing to further their careers and skillsets 
          abroad in the United States of America. The SAT test, or the equivalent ACT test, is 
          designed to assess a student’s suitability for academic upon entering University in the USA.
        </p>
        <p>Our teachers know:</p>
        <ul>
          <li>The core skills required to succeed on the SAT and ACT test.</li>
          <li>The academic demands of the SAT and ACT test.</li>
          <li>How to enable students to achieve the highest result possible on the SAT or ACT test.</li>
        </ul>
        <p>Our teachers can:</p>
        <ul>
          <li>
            Travel to you, to deliver flexible SAT and ACT preparation sessions that are designed 
            bespoke to the student to ensure they achieve the maximum score possible and allow them 
            the greatest chance of success upon applying to University in the USA.
          </li>
          <li>
            Provide expert revision materials to encourage students to practice, prepare and develop 
            the skills needed to succeed in the SAT or ACT test.
          </li>
          <li>
            Boost the confidence of the students and allow them to enter the exam in the knowledge that 
            they are well prepared for a test that will allow them to meet their scholarship requirements. 
          </li>
        </ul>
      </ServiceSection>
      <ServiceSection header={'Curriculum Development'}>
        <p>
          We also operate outside of the classroom, facilitating quality training sessions and creating 
          schemes of learning across a wide range of topics.
        </p>
        <p>Previous projects include:</p>
        <ul>
          <li>Power to Perform – Exam booster sessions, sharing strategies for exam success.</li>
          <li>Quality Writing Workshops – Improving the standard of written communication (report writing/email drafting and written documentation)</li>
        </ul>
        <p>
          Got an educational project coming up? Have an idea for a new educational initiative? Don’t hesitate to get in touch to see how we can help.
        </p>
      </ServiceSection>
    </ServicesStyles>
  );
}
 
export default Services;