import React from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const MenuItemStyles = styled.li`
  padding-right: 2rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  display: inline-block;

  a {
    text-decoration: none;
    color: white!important;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.9rem;
    a {
      color: ${props => props.theme.primary}!important;
    }
  }
`;

const MenuItem = ({ text, wowDelay, history, toggleMenu }) => {
  function scrollToElement(event) {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
    event.preventDefault();
    const id = event.target.attributes['href'].value;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

  function navigateThenScroll(event) {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
    event.preventDefault();
    history.push('/');
    const id = event.target.attributes['href'].value;
    console.log(id);
    setTimeout(() => document.querySelector(id).scrollIntoView({ behavior: 'smooth' }), 0);
  }

  const isHomepage = window.location.pathname === '/';
  const href = `#${text.toLowerCase().replace(/ /g, '-')}`;
  const handler = isHomepage ? scrollToElement : navigateThenScroll;

  return (
    <MenuItemStyles data-wow-delay={`${wowDelay}ms`}>
      <a onClick={handler} href={href}>{text}</a>
    </MenuItemStyles>
  );
}

export default withRouter(MenuItem);