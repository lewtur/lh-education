import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './localAssets/classroom.jpg';

const Parallax = styled.div`
  background-image: url('${BackgroundImage}');
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  & .container {
    padding: 3rem;
    @media ${props => props.theme.breakpoints.lg} {
      padding: 5rem;
    }
  }

  & .title {
    font-size: 6rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
    padding-top: 3rem;

    @media ${props => props.theme.breakpoints.md} {
      font-size: 8rem;
    }
  }

  & .underline {
    font-size: 2rem;
    font-weight: bold;

    @media ${props => props.theme.breakpoints.md} {
      font-size: 3rem;
    }

    @media ${props => props.theme.breakpoints.lg} {
      padding-top: 2rem;
      font-size: 3.5rem;
    }
  }
`;

const Intro = () => {
  return (
    <>
      <Parallax>
        <TitleContainer>
          <div className="container">
            <div className="title">LHES</div>
            <div className="underline">Specialised educational services for sporting institutions</div>
          </div>
        </TitleContainer>
      </Parallax>
    </>
  );
}

export default Intro;