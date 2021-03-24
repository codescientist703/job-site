import { Helmet } from 'react-helmet';
import SiteData from '../../RawContent/site.json';
import { useLocation } from 'react-router-dom';

const Seo = ({ title, description, image }) => {
	const { pathname } = useLocation();

	const defaultTitle = SiteData.meta.title;
	const defaultDescription = SiteData.meta.description;
	const siteUrl = SiteData.meta.siteUrl;
	const defaultImage = SiteData.meta.thumbnail;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		siteName: SiteData.meta.siteName,
	};

	return (
		<Helmet title={seo.title} titleTemplate={SiteData.meta.titleTemplate}>
			<html lang='en-US' />
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<link rel='canonical' href={seo.url} />
			<meta name='robots' content='index, follow' />
			<meta property='og:url' content={seo.url} />
			<meta property='og:title' content={seo.title} />
			<meta property='og:image' content={seo.image} />
			<meta property='og:description' content={seo.description} />
			<meta property='og:site_name' content={seo.siteName} />
		</Helmet>
	);
};

export default Seo;
