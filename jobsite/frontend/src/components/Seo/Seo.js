import { Helmet } from 'react-helmet';

const Seo = ({ title }) => {
	return (
		<Helmet title={'test site'} titleTemplate={'titleTemplate'}>
			<meta name='twitter:card' content='summary_large_image' />
		</Helmet>
	);
};

export default Seo;
