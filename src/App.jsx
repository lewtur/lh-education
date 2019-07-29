import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
import SafeguardingPage from './Pages/SafeguardingPage';
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

const MainContent = () => {
  return (
    <>

      <Intro />
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <Projects />
      <Testimonials />
      <SafeguardingPolicy />
      <Contact />
      <Footer />
    </>
  )
}

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
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/safeguarding-policy" component={SafeguardingPage} />
              <Route component={() => <section>Page not found</section>} />
            </Switch>
          </Router>
        </SectionStyles>
      </ThemeProvider>
    );
  }
}

export default App;
