import styled from 'styled-components/macro';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// styling for section two starts

export const SecTwoContainer = styled.section`
	background-color: ${({ theme }) => theme.bgLight};
`;

export const Container = styled.div`
	/* for mobile */
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 100px 20px;
	display: flex;
	flex-direction: column-reverse;
	/* justify-content: space-between;
	align-items: center; */
	flex-wrap: wrap;

	/* tablet and higher devices */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		flex-direction: row;
		justify-content: space-between;

		padding: 150px 20px;
	}
`;

export const ContainerLeft = styled.div`
	/* for mobile */
	width: 100%;
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 45%;
	}
`;

export const ContainerRight = styled.div`
	/* for mobile */
	width: 100%;
	padding: 10px 20px;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 45%;
	}
`;

export const SVG = styled.img`
	margin-top: 30px;
	width: 100%;
	max-width: 450px;
	/* min-width: 400px; */

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		max-width: 500px;
	}
`;

export const Heading = styled.h2`
	/* for mobile */
	font-size: 1.7rem;
	margin-bottom: 1rem;

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		font-size: 1.95rem;
	}
`;

export const Description = styled.p`
	/* for mobile */
	font-size: 1.05rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.subParaColor};
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-bottom: 20px;
		font-size: 20px;
	}
`;

// conatiner three styling starts

export const ContainerThree = styled.div`
	/* for mobile */
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 3rem 1rem 6rem 1rem;
`;

export const ContainerHeading = styled.h2`
	/* for mobile */
	text-align: center;
	margin-bottom: 7px;
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
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 4rem;

	/* for tablet  */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 30px 30px;
	}

	/* for laptop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Card = styled.div`
	/* for mobile */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	min-height: 200px;
	box-shadow: ${({ theme }) => theme.shadow};
	margin-bottom: 1.25rem;
	padding: 1.25rem 1.3rem;
	transition: transform 0.5s, box-shadow 0.5s;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadowHover};
		transform: scale(1.03);
	}
`;

export const CardIcon = styled.div`
	font-size: 3rem;
	color: ${({ color }) => color};
	margin-bottom: 0px;
`;

export const CardTitle = styled.h3`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;
export const CardContent = styled.div`
	font-size: 16px;
	margin-bottom: 0.5rem;
`;
export const HeroSection = styled.section`
	width: 100%;
	position: relative;

	/* for tablet */
	/* @media screen and (min-width: ${({ theme }) => theme.md}px){
		min-height: 50vh;
	} */
	/* for desktop */
	/* @media screen and (min-width: ${({ theme }) => theme.lg}px){
		min-height: 80vh;
	} */
`;

export const ContainerOne = styled.div`
	/* for mobile */
	width: 100%;
	max-width: 1300px;

	margin: 0 auto;
	margin-top: 1.5rem;
	padding: 0px 20px;
	/* background-color: #eaeaea; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* flex-wrap: wrap; */
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		margin-top: 2.5rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const ContainerOneLeft = styled.article`
	/* for mobile */
	/* background-color: #fafafa; */
	padding: 10px 20px;
	width: 100%;
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 45%;
	}
`;

export const ContainerOneRight = styled.figure`
	/* for mobile */
	/* background-color: #fafafa; */
	padding: 10px 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		width: 48%;
	}
`;

export const HeroHeading = styled.h2`
	/* for mobile */
	font-size: 1.8rem;
	margin-bottom: 10px;
	font-weight: 900;
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		font-size: 2rem;
	}
	/* for desktop */
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		font-size: 2.5rem;
	}
`;

export const HeroSubHeading = styled.p`
	/* for mobile */
	font-size: 1.15rem;
	font-weight: 500;
	color: ${({ theme }) => theme.subParaColor};
	margin-bottom: 30px;
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
	/* background-color: #ddd; */
	padding: 4px 7px;
	border-radius: 50px;
	max-width: 380px;
	box-shadow: ${({ theme }) => theme.shadow};
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 6px 7px;
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
	padding: 5px;
	font-size: 1.09rem;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		/* width: 70%; */
		width: 55%;
	}
`;

export const SearchButton = styled(Link)`
	text-decoration: none;
	background-color: lightblue;
	color: white;
	border: none;
	outline: none;
	padding: 9px 20px;
	border-radius: 20px;
	font-weight: 500;
	font-size: 1.01rem;
`;

export const HeroImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 450px;
	margin-top: 30px;
	margin-bottom: 30px;
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		margin: 0;
	}
`;

export const WaveSVG = styled.svg`
	/* position: absolute; */
	position: relative;
	left: 0;
	bottom: 0;
	z-index: -1;
	display: none;
	/* min-height: 250px; */
	/* max-height: 300px; */
	/* for tablet */
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
	}
	/* for desktop */
	/* @media screen and (min-width: 1500px){
		height: 300px;
	} */
`;
