import React from 'react'
import styled from 'styled-components';

const MenuItemStyles = styled.li`
    padding-right: 2rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;
    display: inline-block;

    a {
        text-decoration: none;
    }

    @media ${props => props.theme.breakpoints.md} {
        font-size: 0.9rem;
    }
`;

const MenuItem = ({ text, wowDelay }) => {
    function scrollToElement(event) {
        event.preventDefault();
        const id = event.target.attributes['href'].value;
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }

    return ( 
        <MenuItemStyles className="wow fadeIn" data-wow-delay={`${wowDelay}ms`}>
            <a onClick={scrollToElement} href={`#${text.toLowerCase().replace(/ /g, '-')}`}>{text}</a>
        </MenuItemStyles>
     );
}
 
export default MenuItem;