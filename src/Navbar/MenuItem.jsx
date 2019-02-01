import React from 'react'
import styled from 'styled-components';

const MenuItemStyles = styled.li`
    padding-right: 2rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    display: inline-block;
`;

const MenuItem = ({ text }) => {
    return ( 
        <MenuItemStyles>{text}</MenuItemStyles>
     );
}
 
export default MenuItem;