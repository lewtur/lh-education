import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './localAssets/placeholder.jpg';

const Parallax = styled.div`
    background-image: url('${BackgroundImage}');
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;

    @media ${props => props.theme.breakpoints.md} {
        background-position-x: unset;
    }
`;

const Intro = () => {
    return ( 
        <>
            <Parallax />
        </>
     );
}
 
export default Intro;