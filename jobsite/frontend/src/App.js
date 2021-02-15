import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, JobList } from './pages';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/category' exact component={JobList} />
					<Route path='/category/jobname' component={JobList} />
				</Switch>
			</ThemeProvider>
		</Router>
	);
}

export default App;
