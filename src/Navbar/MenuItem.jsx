import React from 'react'
import styled from 'styled-components';

const MenuItemStyles = styled.li`
    padding-right: 2rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;
    display: inline-block;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 0.9rem;
    }
`;

const MenuItem = ({ text, wowDelay }) => {
    return ( 
        <MenuItemStyles className="wow fadeIn" data-wow-delay={`${wowDelay}ms`}>{text}</MenuItemStyles>
     );
}
 
export default MenuItem;