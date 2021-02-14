import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, JobList } from './pages';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/category' exact component={JobList} />
				<Route path='/category/jobname' component={JobList} />
			</Switch>
		</Router>
	);
}

export default App;
