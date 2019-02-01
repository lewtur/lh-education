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

const MenuItem = ({ text }) => {
    return ( 
        <MenuItemStyles>{text}</MenuItemStyles>
     );
}
 
export default MenuItem;