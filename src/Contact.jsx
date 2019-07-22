import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactStyles = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  & > div {
    padding-bottom: 0.75rem;
    a {
      text-decoration: none;
      padding-left: 1rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyles id="contact">
      <h1>Contact</h1>
      <div>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:07966787222">07966787222</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:lauren@lhes.co.uk">lauren@lhes.co.uk</a>
      </div>
    </ContactStyles>
  );
}

export default Contact;