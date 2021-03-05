import { NotFoundPage, IMG, Text, BackBtn } from './Page404.elements';
import NotFound from '../../images/illustatus.svg';

const Page404 = () => {
	return (
		<NotFoundPage>
			<IMG src={NotFound} alt='404 Not Found' />
			<Text>
				<span>404 Error!!</span>
				<br />
				The page you are looking for does not exists!
			</Text>
			<BackBtn to='/'>&lt; Go Home</BackBtn>
		</NotFoundPage>
	);
};

export default Page404;
