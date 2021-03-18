import { NotFoundPage, IMG, Text, BackBtn } from './Page404.elements';
import NotFound from '../../images/illustatus.svg';

const Page404 = () => {
	return (
		<NotFoundPage>
			<IMG src={NotFound} alt='404 Not Found' />
			<Text>
				<span>Error 404 !!</span>
				<br />
				Oops! The page you're looking for cannot be found.
			</Text>
			<BackBtn href='/www.jobdundho.com'>&lt; Go Home</BackBtn>
		</NotFoundPage>
	);
};

export default Page404;
