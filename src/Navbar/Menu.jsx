import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import MenuItem from './MenuItem';

const MenuStyles = styled.div`
  align-self: center;
  width: 100%;
  @media ${props => props.theme.breakpoints.md} {
    width: auto;
  }
`;

const MenuListHolder = styled.ul`
  display: none;
  padding-top: 1rem;

  ${props => props.menuIsOpen && css`
      display: flex;
      flex-direction: column;
      height: 84vh;
      background-color: ${props => props.theme.primary};
      color: white;
      justify-content: space-evenly;
      text-align: center;
  `}

  @media ${props => props.theme.breakpoints.md} {
    display: flex;        
    flex-direction: row;
    align-self: center;
    padding-right: 2rem;
    list-style-type: none;
    justify-content: space-between;
    background-color: white;
    color: ${props => props.theme.primary};
  }
`;

class Menu extends Component {
  render() {
    const { menuItems, menuIsOpen, toggleMenu } = this.props;

    return (
      <MenuStyles>
        <MenuListHolder menuIsOpen={menuIsOpen}>
          {menuItems.map((menuItem, index) => <MenuItem key={index} text={menuItem} wowDelay={(index + 1) * 100} toggleMenu={toggleMenu} />)}
        </MenuListHolder>
      </MenuStyles>
    );
  }
}

export default Menu;