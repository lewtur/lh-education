import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import MenuItem from './MenuItem';

const BurgerMenuButton = styled.div`
    display: block;
    height: 2rem;
    width: 2rem;
    background-color: red;

    @media ${props => props.theme.breakpoints.md} {
        display: none;
    }
`;

const MenuStyles = styled.div`
    
`;

const MenuListHolder = styled.ul`
    display: none;

    ${props => props.menuIsOpen && css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: ${props => props.theme.primary};
        color: white;
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
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: true
        };

        this.toggleMenu = () => this.setState(prevState => ({menuIsOpen: !prevState.menuIsOpen}));
    }

    render() {
        const { menuItems } = this.props;
        const { menuIsOpen } = this.state;

        return (
            <MenuStyles>
                <BurgerMenuButton onClick={this.toggleMenu} />
                <MenuListHolder menuIsOpen={menuIsOpen}>
                    {menuItems.map(menuItem => <MenuItem text={menuItem} />)}
                </MenuListHolder>
            </MenuStyles>
        );
    }
}

export default Menu;