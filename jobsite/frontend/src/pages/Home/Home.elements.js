import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
export const WaveIcon = styled.svg`
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
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

	/* @media screen and (min-width: 600px) {
		width: 60%;
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		width: 80%;
	} */
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

export const SecTwoContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: flex-start;
	padding: 15rem 1.5rem;
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		flex-direction: row;
		padding: 4rem 10rem;
	}
	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		padding: 4rem 10rem;
	}
`;
export const Content = styled.div`
	font-size: 1rem;
	margin-bottom: 3rem;
	h2 {
		font-size: 2.4rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
	}
`;
export const BoySvg = styled.div`
	img {
		width: 100%;
		height: auto;
		@media screen and (min-width: ${({ theme }) => theme.md}px) {
			width: 700px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.lg}px) {
		margin-right: 1rem;
	}
`;
