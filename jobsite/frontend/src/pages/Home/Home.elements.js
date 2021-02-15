import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

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
	padding: 0 1.35rem;


	@media screen and (min-width: ${({ theme }) => theme.md}px){
		height: 70vh;
		margin: 60px auto 0;
		align-items: start;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		margin-top: 100px;
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
		font-weight: 900;
		font-size: 2.5rem;
	}
	p {
		margin-top: 1.1rem;
		font-size: 1.3rem;
		font-weight: 600;
		color: rgba(0,0,0,0.7);
	}

	@media screen and (min-width: ${({ theme }) => theme.md}px){
		h1 {
			font-size: 2.8rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.lg}px){
		h1 {
			font-size: 3.5rem;
		}
	}
`;

export const FeatureImage = styled.img`
	/* padding-right: 20px; */
	width: 100%;
	height: auto;
	display: none;
	/* @media screen and (min-width: ${({ theme }) => theme.lg}px) {
		display: block;
	} */

	@media screen and (min-width: ${({ theme }) => theme.md}px) {
		display: block;
	}

`;

export const SearchContainer = styled.div`
	margin-top: 1.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 3px 15px rgba(0,0,0,0.15);
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
	padding: 5px ;
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
