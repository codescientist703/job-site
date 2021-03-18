import ScrollToTop from 'react-scroll-up';
import { BiUpArrowCircle } from 'react-icons/bi';
import styled from 'styled-components/macro';

const UpArrow = styled(BiUpArrowCircle)`
	font-size: 3rem;
	color: ${({ theme }) => theme.primaryColor};
`;

const ScrollUp = () => {
	return (
		<ScrollToTop style={{ position: 'fixed', bottom: '20px' }} showUnder={1400}>
			<UpArrow />
		</ScrollToTop>
	);
};

export default ScrollUp;
