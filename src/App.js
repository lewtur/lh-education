import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from './Navbar/Navbar';
import WOW from 'wowjs';
import Intro from './Intro';
import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

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
					<AboutUs />
					<WhatWeDo />
					<Projects />
					<Testimonials />
					<Contact />
				</SectionStyles>
			</ThemeProvider>
		);
	}
}

export default App;
