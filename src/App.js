import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from './Navbar/Navbar';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<>
					<Navbar />
				</>
			</ThemeProvider>
		);
	}
}

export default App;
