import React from 'react'
import styled from 'styled-components';
import Menu from './Menu';

const NavBarStyles = styled.div`
    width: 100%;
    background-color: white;
    color: ${props => props.theme.primary};
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.breakpoints.md} {
        flex-direction: row;
        justify-content: space-between;
        padding-left: 1.5rem;
        padding-top: 0.5rem;
    }

    .logo-main {
        font-size: 2.8rem;
        font-weight: bold;
    }

    .logo-strap {
        font-size: 0.6rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavBar = () => {
    return (
        <NavBarStyles>
            <LogoContainer>
                <div className="logo-main">LHES</div>
                <div className="logo-strap">LH Educational Services Ltd</div>
            </LogoContainer>
            <Menu menuItems={['About Us', 'What We Do', 'Projects', 'Testimonials', 'Contact']} />
        </NavBarStyles>
    );
}

export default NavBar;