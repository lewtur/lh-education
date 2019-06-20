import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.section`
  font-size: 1.2rem;
  line-height: 3rem;

  @media ${props => props.theme.breakpoints.md} {
      font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <p>
        LH Educational Services Ltd provide bespoke educational provision across
        a wide range of sporting institutions and football academies in the UK.
      </p>
      <p>
        We pride ourselves on enabling students to enjoy learning, make progress
        and achieve results with quality teaching at the heart of everything we
        do.
      </p>
    </HeaderStyles>
  );
};

export default Header;
