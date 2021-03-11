import styled from 'styled-components/macro';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// styling for herosection starts

export const HeroSection = styled.section`
	width: 100%;
	position: relative;
`;

export const ContainerOne = styled.div`
	/* for mobile */
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 3.5rem ${({ theme }) => theme.homePaddingLR} 1.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding-bottom: 0;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const ContainerOneLeft = styled.article`
	/* for mobile */
	width: fit-content;
	margin-bottom: 1rem;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 45%;
		margin: 0;
	}
`;

export const ContainerOneRight = styled.figure`
	/* for mobile */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 48%;
		justify-content: flex-end;
	}
`;

export const HeroHeading = styled.h2`
	/* for mobile */
	font-size: 1.8rem;
	margin-bottom: 0.625rem;
	font-weight: 900;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 2rem;
	}
	/* for desktop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		font-size: 2.7rem;
	}
`;

export const HeroSubHeading = styled.p`
	/* for mobile */
	font-size: 1.15rem;
	font-weight: 500;
	color: ${({ theme }) => theme.subParaColor};
	margin-bottom: 1.875rem;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 1.2rem;
	}
	/* for desktop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		font-size: 1.35rem;
	}
`;

export const SearchBox = styled.div`
	/* for mobile */
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem 0.44rem;
	border-radius: 50px;
	max-width: 380px;
	box-shadow: ${({ theme }) => theme.cardShadow};

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 0.38rem 0.44rem;
	}
`;

export const SearchIcon = styled(IoSearch)`
	/* for mobile */
	width: 15%;
	font-size: 1.5rem;
`;

export const SearchInput = styled.input`
	width: 50%;
	border: none;
	outline: none;
	padding: 0.3125rem;
	font-size: 1.09rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 55%;
	}
`;

export const SearchButton = styled(Link)`
	text-decoration: none;
	background-color: ${({ theme }) => theme.primaryColor};
	color: white;
	border: none;
	outline: none;
	padding: 0.565rem 1.25rem;
	border-radius: 20px;
	font-weight: 500;
	font-size: 1.01rem;
`;

export const HeroImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 450px;
	margin: 1.875rem 0;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		margin: 0;
	}
`;

export const WaveSVG = styled.svg`
	position: relative;
	left: 0;
	bottom: 0;
	z-index: -1;
	display: none;

	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
	}
`;

// *******styling of hersection ends*******

// styling for section two starts
export const SecTwoContainer = styled.section`
	position: relative;
	background-color: ${({ theme }) => theme.bgColor};
`;

export const Container = styled.div`
	/* for mobile */
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 6.25rem ${({ theme }) => theme.homePaddingLR};
	display: flex;
	flex-direction: column-reverse;

	/* tablet and higher devices */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 9rem ${({ theme }) => theme.homePaddingLR};
	}
`;

export const ContainerLeft = styled.div`
	/* for mobile */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2.5rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 45%;
		margin-top: 0;
	}
`;

export const ContainerRight = styled.div`
	/* for mobile */
	width: 100%;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 50%;
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 45%;
	}
`;

export const SVG = styled.img`
	width: 100%;
	max-width: 450px;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		max-width: 500px;
	}
`;

export const Heading = styled.h2`
	/* for mobile */
	font-size: 1.7rem;
	margin-bottom: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		font-size: 1.9rem;
	}
`;

export const Description = styled.p`
	/* for mobile */
	font-size: 1.05rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.subParaColor};

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-bottom: 1.2rem;
		font-size: 1.2rem;
	}
`;

// ********styling of SectionTwo ends********

// conatiner three styling starts

export const ContainerThree = styled.div`
	/* for mobile */
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidthLg}px;
	margin: 0 auto;
	padding: 3rem ${({ theme }) => theme.homePaddingLR} 6.25rem;
`;

export const ContainerHeading = styled.h2`
	/* for mobile */
	text-align: center;
	margin-bottom: 0.45rem;
`;

export const Underline = styled.div`
	height: 5px;
	width: 90px;
	background-color: black;
	margin: 0 auto;
`;
export const CardSection = styled.section``;

export const CardContainer = styled.div`
	/* for mobile device */
	margin-top: 4rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2.4rem;

	/* for tablet  */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Card = styled.div`
	/* for mobile */
	width: 100%;
	margin: 0 auto;
	max-width: 430px;
	background-color: #fff;
	border-radius: 10px;
	min-height: 200px;
	box-shadow: ${({ theme }) => theme.shadow};
	padding: 1.25rem 1.3rem;
	transition: transform 0.5s, box-shadow 0.5s;

	&:hover {
		box-shadow: ${({ theme }) => theme.shadowHover};
		transform: scale(1.03);
	}
`;

export const CardIcon = styled.div`
	text-align: center;
	font-size: 3rem;
	color: ${({ color }) => color};
`;

export const CardTitle = styled.h3`
	text-align: center;
	text-transform: capitalize;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

export const CardContent = styled.p`
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.subParaColor};
`;
