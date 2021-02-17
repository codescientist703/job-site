import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const WaveIcon = styled.svg`
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
		margin-top: -4.6rem;
	}
`;
export const FeatureContainer = styled.div`
	/* display: flex;
	flex-direction: column; */
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	height: 50vh;
	width: 100%;
	max-width: 1300px;
	/* margin: 60px auto 0; */
	margin: 70px auto 30px;
	padding: 0rem 1.5rem;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		margin: 70px auto 30px;
		align-items: start;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
	}
`;

export const FeatureContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	/* padding: 20px; */
	/* padding: 0 1.35rem; */
	h1 {
		font-weight: 800;
		font-size: 2.4rem;
	}
	p {
		margin-top: 1.1rem;
		font-size: 1.3rem;
		color: rgba(0, 0, 0, 0.7);
	}

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		h1 {
			font-size: 2.8rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		h1 {
			font-size: 3.6rem;
		}
	}
`;

export const FeatureImage = styled.img`
	/* padding-right: 20px; */
	width: 100%;
	height: auto;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
		max-width: 550px;
	}
`;

export const SearchContainer = styled.div`
	margin-top: 1.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
	padding: 5px 5px;
	width: 100%;
	max-width: 450px;
	border-radius: 50px;
`;

export const SearchIcon = styled(IoSearch)`
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
		width: 70%;
	}
`;

export const SearchButton = styled.button`
	/* width: 25%; */
	border: none;
	outline: none;
	padding: 9px 20px;
	border-radius: 20px;
	font-weight: 500;
	/* letter-spacing: 1px; */
	font-size: 1.01rem;
`;

// styling for section two starts

export const SecTwoContainer = styled.section`
	background-color: #e2e2e2;
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
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	margin-bottom: 1.25rem;
	padding: 1.25rem 1.3rem;
	&:hover {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
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
