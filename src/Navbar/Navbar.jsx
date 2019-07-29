import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from './Menu';

const NavBarStyles = styled.div`
    width: 100%;
    background-color: white;
    color: ${props => props.theme.primary};
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    @media ${props => props.theme.breakpoints.md} {
        flex-direction: row;
        justify-content: space-between;
        
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
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;

    .top-line {
        display: flex;
        justify-content: space-between;
    }

    a {
      text-decoration: none;
    }
`;

const BurgerMenuButton = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;

    @media ${props => props.theme.breakpoints.md} {
        display: none;
    }
`;

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.toggleMenu = () => this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  }

  render() {
    const { menuIsOpen } = this.state;
    const icon = menuIsOpen ? 'times' : 'bars'

    return (
      <NavBarStyles>
        <LogoContainer>
          <Link to="/">
            <div className="top-line">
              <div className="logo-main">LHES</div>
              <BurgerMenuButton onClick={this.toggleMenu}>
                <FontAwesomeIcon icon={icon} size="3x" />
              </BurgerMenuButton>
            </div>
            <div className="logo-strap">LH Educational Services Ltd</div>
          </Link>
        </LogoContainer>
        <Menu menuItems={['Who We Are', 'What We Do', 'Services', 'Testimonials', 'Contact']} menuIsOpen={menuIsOpen} />
      </NavBarStyles>
    );
  }
}
export default NavBar;