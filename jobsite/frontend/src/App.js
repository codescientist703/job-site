import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Home,
	JobList,
	JobSingle,
	JobExperience,
	JobExperienceSingle,
	Page404,
} from './pages';
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
					<Route path='/category/:categoryName' exact component={JobList} />
					<Route path='/job-experience' exact component={JobExperience} />
					<Route
						path='/job-experience/exp'
						exact
						component={JobExperienceSingle}
					/>
					<Route path='/:slug' component={JobSingle} />

					<Route component={Page404} />
				</Switch>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
