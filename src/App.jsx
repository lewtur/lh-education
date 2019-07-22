import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from './Navbar/Navbar';
import WOW from 'wowjs';
import Intro from './Intro';
import WhatWeDo from './WhatWeDo';
import Projects from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import SafeguardingPolicy from './SafeguardingPolicy';
import Footer from './Footer';

const SectionStyles = styled.div`
  section {
    padding: 1rem 2rem;

    @media ${props => props.theme.breakpoints.md} {
      padding: 1rem 6rem;
    }

    @media ${props => props.theme.breakpoints.lg} {
      padding: 1rem 12rem;
    }
  }

  a {
    color: ${props => props.theme.primary}
  }
`;

class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SectionStyles>
          <Navbar />
          <Intro />
          <Header />
          <WhoWeAre />
          <WhatWeDo />
          <Projects />
          <Testimonials />
          <SafeguardingPolicy />
          <Contact />
          <Footer />
        </SectionStyles>
      </ThemeProvider>
    );
  }
}

export default App;
