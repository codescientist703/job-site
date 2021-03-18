import ScrollToTop from 'react-scroll-up';
// import { BiUpArrowCircle } from 'react-icons/bi';
import { ImArrowUp2 } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%{
		transform: translateY(0);
	}
	50%{
		transform: translateY(-15px);
	}
	100%{
		transform: translateY(0);
	}
`;

const UpArrow = styled(ImArrowUp2)`
	font-size: 2.7rem;
	padding: 0.6rem;
	background-color: ${({ theme }) => theme.primaryColor};
	color: #fff;
	border-radius: 50%;
	animation: ${animate} 1.5s linear infinite;
`;

const ScrollUp = () => {
	return (
		<ScrollToTop
			style={{ position: 'fixed', bottom: '13px', right: '10px' }}
			showUnder={500}
		>
			<UpArrow />
		</ScrollToTop>
	);
};

export default ScrollUp;
