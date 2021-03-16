import GlobalStyle from './globalStyles';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Header, Footer, Loader } from './components';

const Home = React.lazy(() => import('./pages/Home/Home'));
const JobList = React.lazy(() => import('./pages/JobList/JobList'));
const JobSingle = React.lazy(() => import('./pages/JobSingle/JobSingle'));
const JobExperience = React.lazy(() =>
	import('./pages/JobExperience/JobExperience')
);
const JobExperienceSingle = React.lazy(() =>
	import('./pages/JobExperienceSingle/JobExperienceSingle')
);
const JobExperienceForm = React.lazy(() =>
	import('./pages/JobExperienceForm/JobExperienceForm')
);

const PrivacyPolicy = React.lazy(() =>
	import('./pages/PrivacyPolicy/PrivacyPolicy')
);
const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse/TermsOfUse'));
function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/interview-experiences'
							exact
							component={JobExperience}
						/>
						<Route path='/privacy-policy' exact component={PrivacyPolicy} />
						<Route path='/terms-of-use' exact component={TermsOfUse} />
						<Route
							path='/contribute-your-experience'
							exact
							component={JobExperienceForm}
						/>
						<Route path='/category/:categoryName' exact component={JobList} />
						<Route
							path='/job-experience/:slug'
							exact
							component={JobExperienceSingle}
						/>
						<Route path='/:slug' component={JobSingle} />
					</Switch>
				</Suspense>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
