import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, JobList } from './pages';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Header, Footer } from './components';
function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/category' exact component={JobList} />
					<Route path='/category/jobname' component={JobList} />
				</Switch>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
